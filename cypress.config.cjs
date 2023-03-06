const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4111',
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config)
      on('file:preprocessor', cucumber())
      return config
    },
    specPattern: 'cypress/features/*.{feature,features}',
  },
})
