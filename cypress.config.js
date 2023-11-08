const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    "reportDir": "mochawesome-report",
    "overwrite": false,
    "html": true,
    "json": true,

  },
  "cypress-cucumber-preprocessor": {
    nonGlobalStepDefinitions: true,
    integrationFolder: "cypress/integration"
  },


  e2e: {
    specPattern: '**/*.feature',
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);
      require('./cypress/plugins/index.js')(on, config)
    },

  },
  env: {

    URL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'

  },


});
