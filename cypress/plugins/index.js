const cucumber = require('cypress-cucumber-preprocessor').default;

module.exports = (on, config) => {

  on('file:preprocessor', cucumber());
  config.env.step_definitions = 'cypress/integration';
  return config;
};