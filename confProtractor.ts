import { browser } from "protractor";
import { myCustomReporter } from "./helpers/customReporter";

exports.config = {
        framework: 'jasmine2',
        seleniumAddress: 'http://localhost:4445/wd/hub',
        specs: ['./Specs/SpecCalculator.ts', './Specs/API_test.ts'],
        multiCapabilities: [
                            { browserName: 'firefox',
                                'moz:firefoxOptions': {
                                    args: ["--headless", "--disable-gpu", "--no-sandbox"]
                                }
                            },
                            { browserName: 'chrome' ,    
                                chromeOptions: {
                                    args: ["--headless", "--disable-gpu", "--no-sandbox"]
                                }
                            }
       ],
       
       jasmineNodeOpts: {
           showColors: true,
           showTiming: true,
           defaultTimeoutInterval: 90000,
           isVerbose: true
       },
      
       onPrepare: function () {
           require('ts-node').register({ project: 'tsconfig.json' });
           jasmine.getEnv().addReporter(myCustomReporter);
           var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
           return browser.getProcessedConfig().then(function(config) {
               var browserName = config.capabilities.browserName;
               var jasmineReporter = new Jasmine2HtmlReporter({
                   consolidateAll: true,
                   savePath: './testresults',
                   screenshotsFolder: './screenshots',
                   takeScreenshots: true,
                   takeScreenshotsOnlyOnFailures: true,
                   fixedScreenshotName: false,
                   fileNamePrefix: browserName,
                   modifyReportFileName: function(generatedFileName: string, suite: any) {
                       return browserName + '.' + generatedFileName;
                   }
               });
               jasmine.getEnv().addReporter(jasmineReporter);
           });
       }
    }