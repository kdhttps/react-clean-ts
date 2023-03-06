/* eslint-disable no-undef */
/* eslint-disable @typescript-eslint/no-var-requires */
const { defineConfig } = require('cypress')
const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
const { addCucumberPreprocessorPlugin } = require('@badeball/cypress-cucumber-preprocessor')
const { preprocessor } = require('@badeball/cypress-cucumber-preprocessor/browserify')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost:4111',
    async setupNodeEvents(on, config) {
      // Cypress code coverage plugin
      require('@cypress/code-coverage/task')(on, config)

      // Cypress cucumber plugin
      // This is required for the preprocessor to be able to generate JSON reports after each run, and more,
      await addCucumberPreprocessorPlugin(on, config)

      on(
        'file:preprocessor',
        preprocessor(config, {
          typescript: require.resolve('typescript'),
        }),
      )

      // return config
      return config
    },
    specPattern: '**/*.feature',
  },
})
