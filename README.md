# Protractor e2e and API test automation with Typescript

This is a sample test automation project covering UI and API tests

## Tools and libraries used

  - Protractor
  - Jasmine
  - HTTP
  - Request
  - JSONpath
  - Protractor-Jasmine reporter

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

#### Run
```sh
webdriver-manager start --seleniumPort ####
cd projectDirectory\npm test
```

### Reporting
Reports are created separately for each browser and stored in \testresults
Logs are stored in \logs
