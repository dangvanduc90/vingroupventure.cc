'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  BACKEND_API_URL: '"http://api.vingroupventure.cc/api"',
  VINGROUP_API_URL: '"http://api.vingroupventures.cc/api"',
})
