# Protractor / Appium e2e and API test automation with Typescript

This is a sample test automation project covering UI for desktop and mobile and API tests

## Tools and libraries used

  - Protractor
  - Selenium WebDriver
  - Jasmine
  - HTTP
  - Request
  - JSONpath
  - Protractor-Jasmine reporter   
  - Appium
  - Android Studio
  - XCode


### Installation

It requires [Node.js](https://nodejs.org/) to run.
The project can be imported to Eclipse or any other IDE (Angular plugin is required)

Install the dependencies and devDependencies and start the server.

```sh
npm install -g protractor
npm install typescript --save-dev
webdriver-manager update
npm install jasmine --save-dev
npm install --save-dev jasmine-reporters@^2.0.0
npm install @types/jasmine --save-dev
npm install @types/node --save-dev
npm install ts-node --save-dev
npm install jasmine2-protractor-utils --save-dev
npm install protractor-html-reporter-2 --save-dev
npm install protractor-jasmine2-html-reporter --save-dev
npm install jasmine-data-provider --save-dev
npm install @types/jasmine-data-provider --save-dev
npm install http --save-dev
npm install request-promise --save-dev
npm install jsonpath --save-dev
```

### Appium Installation

Appium can be installed in different ways. The easiest way is to install through webdriver-manager, however webdriver-manager no longer supports appium.
NOTE: If you install appium and Android SDK separately make sure you have the same versions of ChromeDriver on both systems 
In odrder to run Appium for iOS there should be Xcode installed on MacOS / iOs (virtual MacOS / iOS)

```sh
webdriver-manager update --android          //This will install Appium and Android SDK as well. To install specific avd: --android-api-levels 26
npm install -g appium-doctor                //This is to check installed appium dependencies
npm install wd --save-dev                   //Install WD and WD-Bridge in order to get extended commands list for mobile devices
npm install wd-bridge --save-dev
```

#### Run
```sh
webdriver-manager start --seleniumPort #### //add --android to run webdriver-manager based Android SDK version
appium                                      //To run Appium from standalone Appium version
cd projectDirectory\npm test                //Runs pc based tests
cd projectDirectory\npm run-script appium   //Runs Appium based tests on emaluted devices
```

### Reporting
Reports are created separately for each browser and stored in \testresults
Logs are stored in \logs