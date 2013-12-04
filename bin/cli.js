#!/usr/bin/env node
var doccy = require("../doccy.js");
var program = require("commander");
var pjson = require('../package.json');
var glob = require("glob");
var mkdirp = require("mkdirp");
var notifier = require('update-notifier');

if (notifier.update) {
    notifier.notify('Update available: ' + notifier.update.latest);
}

program.version(pjson.version)
  .option('-g, --glob [fileGlob]', 'Run Doccy on all files matching [fileGlob]')
  .option('-o, --output [outputDir]', 'Specify the directory to output documentation to', 'docs')
  .parse(process.argv);

if(program.glob) {
  glob(program.glob, {}, function(err, files) {
    if(files.length) mkdirp(program.output);
    files.forEach(function(file) {
      if(file.indexOf("node_modules") == -1) {
        doccy.init(file, program.output);
      }
    });
  });
} else {
  var filename = program.args[0];
  if(filename) {
    doccy.init(filename, program.output);
  } else {
    program.help();
  }
}
