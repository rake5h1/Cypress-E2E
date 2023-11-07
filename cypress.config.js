const { defineConfig } = require("cypress");

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',

  reporterOptions: {
    "reportDir": "mochawesome-report",
    "overwrite": false,
    "html": true,
    "json": true,
    "video": true,
    "videosFolder": "cypress/videos"
  },



  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      require('cypress-mochawesome-reporter/plugin')(on);

    },
  },
  env: {

    URL: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
  }
});
