var parseFile = require("./src/parsefile.js");
var writeMarkdown = require("./src/writemarkdown.js");
var fs = require("fs");
var path = require("path");
var _ = require("underscore");

/*
 * @object doccy
 * @description the doccy module
 */
var doccy = {
  /*
   * @name init
   * @param filename the src file to read for docstrings
   * @param outputDir the folder to output markdown into
   */
  init: function(filename, outputDir) {
    fs.readFile(filename, "utf8", function(err, contents) {
      if(err) console.log(err);
      var parsed = parseFile.parse(contents);
      var markdown = writeMarkdown.parse(parsed);
      var inputFileName = _.last(filename.split("/"));
      var outputFile = _.initial(inputFileName.split(".")).join(".");
      this.writeToFile(markdown, outputDir, outputFile);
    }.bind(this));
  },
  /*
   * @name writeToFile
   * @param markdown the result of calling writeMarkdown.parse
   * @param outputDir the directory to write to
   * @param outputFile the filename to output to
   */
  writeToFile: function(markdown, outputDir, outputFile) {
    var toWrite = [];
    markdown.forEach(function(block) {
      toWrite.push(block.join("\n\n"));
    });
    var contents = toWrite.join("\n\n");
    var output = path.join(outputDir, outputFile) + ".md";
    fs.writeFile(output, contents, function(err) {
      if(err) console.log(err);
      console.log("File " + output + " written.");
    });
  }
};

module.exports = doccy;


