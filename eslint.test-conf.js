const conf = require('./eslint.conf.js')
conf.env.jasmine = true
conf.globals.define = 'readonly'
conf.globals.vd = 'readonly'
module.exports = conf
