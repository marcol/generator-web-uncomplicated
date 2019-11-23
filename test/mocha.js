const assert = require('yeoman-assert')
const path = require('path')
const helpers = require('yeoman-test')
const target = 'test/index.js'

describe('Test --mocha', function () {
  before(() => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .inDir(path.join(__dirname, '.tmp'))
      .withOptions({
        'skip-install': true,
        mocha: true
      })
      .then(function () {
        return true
      })
  })

  it('checks if test file', () => {
    assert.file(target)
  })

  it('checks if webpack is installed', () => {
    assert.jsonFileContent(path.join(__dirname, '.tmp/package.json'), {
      scripts: {
        test: 'mocha \'test/index.js\''
      }
    })
  })
})

module.exports = null