exports.config = {

  specs: ['e2e/responsiveSpec.js','e2e/scenariosSpec.js'],

  capabilities: {
    browserName: 'chrome',
    shardTestFiles: true,
    maxInstances: 2
  },

  chromeDriver: '/usr/local/bin/chromedriver',

  baseUrl: 'http://localhost:8080/',

  framework: 'jasmine',

};