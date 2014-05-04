var pickFiles = require('broccoli-static-compiler');
var mergeTrees  = require('broccoli-merge-trees');

var vendor = pickFiles('vendor', {
  srcDir: '/qunit/qunit',
  files: ['qunit.css', 'qunit.js'],
  destDir: '/vendor/qunit'
});

var index = pickFiles('node_modules', {
  srcDir: '/broctree-qunit/lib',
  files: ['index.js'],
  destDir: '/vendor/qunit'
});

module.exports = mergeTrees([vendor, index], { overwrite: true });
