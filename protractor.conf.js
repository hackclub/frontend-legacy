exports.config = {
  baseUrl: 'http://localhost:9000/',
  specs: ['./test/integration/*.js'],

  capabilities: {
    'browserName': 'chrome'
  },

  jasmineNodeOpts: {
    showColors: true,
    keepAlive: false,
    defaultTimeoutInterval: 30000
  }
}
