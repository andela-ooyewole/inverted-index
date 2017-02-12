var path = require('path');

module.exports = {
  entry: './jasmine/spec/inverted-index-test.js',
  output: {
    filename: 'bundled-inverted-index-test.js',
    path: path.resolve(__dirname, './jasmine/spec/')
  }
};
