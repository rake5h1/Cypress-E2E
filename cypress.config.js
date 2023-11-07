const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    "reportDir": "mochawesome-report",
    "overwrite": false,
    "html": true,
    "json": true,

  },



  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },

  },
  env: {

    URL: 'https://rake5h1.github.io/ReactApp/'

  },
  testFiles: "**/*.feature"

});
