/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('cypress')
const cucumber = require('cypress-cucumber-preprocessor').default
const browserify = require('@cypress/browserify-preprocessor')
const resolve = require('resolve')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4111',
    setupNodeEvents(on, config) {
      // Cypress code coverage plugin
      require('@cypress/code-coverage/task')(on, config)

      // Cypress cucumber plugin
      const options = {
        ...browserify.defaultOptions,
        typescript: resolve.sync('typescript', { baseDir: config.projectRoot }),
      }

      on('file:preprocessor', cucumber(options))

      // return config
      return config
    },
    specPattern: 'cypress/features/*.{feature,features}',
  },
})
