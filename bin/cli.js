var doccy = require("../index.js");

var filename = process.argv[2];
var output = process.argv[3] || "docs.md";

doccy.init(filename, output);
