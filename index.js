var parseFile = require("./src/parsefile.js");
var writeMarkdown = require("./src/writemarkdown.js");
var fs = require("fs");

var doccy = {
  /*
   * @name init
   * @param filename the src file to read for docstrings
   * @param output the file name to output markdown into
   */
  init: function(filename, output) {
    fs.readFile(filename, "utf8", function(err, contents) {
      if(err) console.log(err);
      var parsed = parseFile.parse(contents);
      var markdown = writeMarkdown.parse(parsed);
      this.writeToFile(markdown, output);
    }.bind(this));
  },
  /*
   * @name writeToFile
   * @param markdown the result of calling writeMarkdown.parse
   * @param output the filename to output to
   */
  writeToFile: function(markdown, output) {
    var toWrite = [];
    markdown.forEach(function(block) {
      toWrite.push(block.join("\n\n"));
    });
    var contents = toWrite.join("\n\n");
    fs.writeFile(output, contents, function(err) {
      if(err) console.log(err);
      console.log("File " + output + " written.");
    });
  }
};

module.exports = doccy;


