import { browser } from "protractor";
import { myCustomReporter } from "./helpers/customReporter";

/*
var wd = require('wd');
var wdBridge: any;
try {
    wdBridge = require('wd-bridge')(require('protractor'), wd);
}
catch (ign) {
    wdBridge = require('../..')(require('protractor'), wd);
}
*/

exports.config = {
        framework: 'jasmine2',
        seleniumAddress: 'http://localhost:4723/wd/hub',
        specs: ['./Specs/SpecCalculator.ts'],
        capabilities:
            { 
                avd: 'Pixel_2_XL_API_27',
                browserName: 'chrome',
                deviceName: 'Pixel2XL',
                /*
                chromeOptions: {
                    args: [ "--disable-gpu", "--window-size=800,600" ]
                },*/
                //isHeadless: true,
                newCommandTimeout: 30000,
                orientation: 'LANDSCAPE',
                platformName: 'Android',
                platformVersion: 8.1
            }/*
            { ,
                automationName: 'XCUITest',
                browserName: 'safari',
                platformName: 'iOS',
                platformVersion: '7.1',
                deviceName: 'iPhone Simulator',
            }*/
,
       
       jasmineNodeOpts: {
           showColors: true,
           showTiming: true,
           defaultTimeoutInterval: 90000,
           isVerbose: true
       },
      
       onPrepare: function () {
           //wdBridge.initFromProtractor(exports.config);
           require('ts-node').register({ project: 'tsconfig.json' });
           jasmine.getEnv().addReporter(myCustomReporter);
           var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');
           return browser.getProcessedConfig().then(function(config) {
               var browserName = '_' + config.capabilities.platformName + '_' + config.capabilities.platformVersion
                               + '_' + config.capabilities.deviceName;
               var jasmineReporter = new Jasmine2HtmlReporter({
                   consolidateAll: true,
                   savePath: './testresults/Appium',
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