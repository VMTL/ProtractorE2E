import CustomReporter = jasmine.CustomReporter;

var curDate = new Date();
const fs = require("fs");
var st : string, fileSt : string;

export const
    myCustomReporter : CustomReporter = {
            
            suiteStarted: (result: any) => {
                st = '\x1b[36m' + 'SUITE ' + result.fullName + '\x1b[37m' + ' STARTED: ' + result.description + ' at ' + curDate;
                console.log(st);
                fileSt += '\n' + st;
            },
            
            specStarted: (result: any) => {
                st = '\x1b[36m' + 'SPEC ' + result.fullName + '\x1b[37m' + ' STARTED: ' + result.description + ' at ' + curDate;
                console.log(st);
                fileSt += '\n' + st;
            },
            
            specDone: (result: any) => {
                if(result.status == "passed"){
                    var color = '\x1b[32m';
                }
                else
                    var color = '\x1b[31m';
                st = color + 'SPEC: ' + result.description + ' was ' + result.status + '\x1b[37m'  + ' at ' + curDate;
                console.log(st);
                fileSt += '\n' + st;
                for(var i = 0; i < result.failedExpectations.length; i++) {
                    st = '\x1b[31m' + 'FAILURE: ' + '\x1b[37m' + result.failedExpectations[i].message;
                    console.log(st);
                    fileSt += '\n' + st;
                    st = result.failedExpectations[i].stack;
                    console.log(st);
                    fileSt += '\n' + st;
                }
                st = result.passedExpectations.length;
                console.log(st);
                fileSt += '\n' + st;
            },
            
            suiteDone: (result: any) => {
                st = '\x1b[36m' + 'SUITE: ' + result.description + ' was ' + result.status + '\x1b[37m'  + ' at ' + curDate;
                console.log(st);
                fileSt += '\n' + st;
                for(var i = 0; i < result.failedExpectations.length; i++) {
                    st = 'AFTER_ALL ' + result.failedExpectations[i].message;
                    console.log(st);
                    fileSt += '\n' + st;
                    st = result.failedExpectations[i].stack;
                    console.log(st);
                    fileSt += '\n' + st;
                }
            },
            
            jasmineDone: function() {
                st = '\x1b[36m' + 'SUITE FINISHED at ' + '\x1b[37m' + curDate;
                console.log(st);
                fileSt += '\n' + st;
                
                var dir = './Logs';

                if (!fs.existsSync(dir)){
                    fs.mkdirSync(dir);
                }
                var consoleOutput = fs.createWriteStream(dir + '/' + curDate.getTime() + 'consoleOutput.txt');
                consoleOutput.write(fileSt);
            }
    }