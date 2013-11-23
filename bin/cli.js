#!/usr/bin/env node
var doccy = require("../index.js");
var program = require("commander");
var pjson = require('../package.json');
var filename = output = null;

program.version(pjson.version).parse(process.argv);

filename = program.args[0];
output = program.args[1] || "docs.md";

if(filename) {
	doccy.init(filename, output);
} else {
	program.help();
}