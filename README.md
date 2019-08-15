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
  - Allure Reports
  - Appium
  - Android Studio
  - XCode


### Installation

It requires [Node.js](https://nodejs.org/) to run.
Clone the repo and Install the dependencies and devDependencies and start the server.

```sh
git clone git@github.com:https:VMTL/ProtractorE2E.git
npm install
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
webdriver-manager start --seleniumPort 4445 --detach //starts detached selenium server on port 4445
cd projectDirectory\npm test                         //Runs pc based tests
cd projectDirectory\npm run-script appium            //Runs Appium based tests on emaluted devices
```

### Reporting
Reports are created separately for each browser and stored in \testresults
Logs are stored in \logs
