import { browser } from "protractor";
import { myCustomReporter } from "../helpers/customReporter";

exports.config = {
        framework: 'jasmine2',
        directConnect: false, // set TRUE to run without SeleniumServer
        seleniumAddress: 'http://localhost:4445/wd/hub',
        specs: ['../Specs/SpecCalculator.ts', '../Specs/API_test.ts', '../Specs/SpecPrimeHome.ts'],
        allScriptsTimeout: 50000,
        SELENIUM_PROMISE_MANAGER: false,
        //rootElement: 'app-root',
        useAllAngular2AppRoots: true,
        multiCapabilities: [
                            { browserName: 'firefox',
                                shardTestFiles: true, //Restart a browser after each Spec
                                'moz:firefoxOptions': {
                                    args: ["--window-size=1920,1080",
                                           "--headless",
                                           "--disable-gpu",
                                           "--no-sandbox"]
                                }
                            },
                            { browserName: 'chrome',
                                shardTestFiles: true,  
                                chromeOptions: {
                                    args: ["--window-size=1920,1080",
                                           "--headless",
                                           "--disable-gpu",
                                           "--no-sandbox"]
                                }
                            }
       ],
       
       jasmineNodeOpts: {
           showColors: true,
           showTiming: true,
           defaultTimeoutInterval: 90000,
           isVerbose: true
       },
      
       onPrepare: () => {
           require('ts-node').register({ project: 'tsconfig.json' });
           jasmine.getEnv().addReporter(myCustomReporter);
           
           var AllureReporter = require('jasmine-allure-reporter');
           jasmine.getEnv().addReporter(new AllureReporter({
               resultsDir: './allure-results'
           }));
           /*
           jasmine.getEnv().afterEach(function(done){
               browser.takeScreenshot().then(function (png) {
                   AllureReporter.createAttachment('Screenshot', function () {
                       return new Buffer(png, 'base64')},
                       'image/png')();
                   done();
               })
           });*/
           
           var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
           return browser.getProcessedConfig().then( (config) => {
               var browserName = config.capabilities.browserName;
               var jasmineReporter = new Jasmine2HtmlReporter({
                   consolidate: true,
                   consolidateAll: true,
                   savePath: './testresults',
                   screenshotsFolder: './screenshots',
                   takeScreenshots: true,
                   takeScreenshotsOnlyOnFailures: true,
                   fixedScreenshotName: false,
                   fileNamePrefix: browserName,
                   modifyReportFileName: (generatedFileName: string, suite: any) => {
                       return browserName + '.' + generatedFileName;
                   }
               });
               jasmine.getEnv().addReporter(jasmineReporter);
           });
       }
    }