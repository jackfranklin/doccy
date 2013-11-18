var writeMarkdown = require("../src/writemarkdown.js");
var parseFile = require("../src/parsefile.js");
var assert = require("assert");

describe("Writing Markdown", function() {
  var result;
  before(function() {
    var contents = [
      "/*DOC",
      " * @name foo",
      " * @returns something else",
      " */",
      "var foo = function() {}"
    ].join("\n");
    result = parseFile.parse(contents);
  });

  it("generates the right Markdown", function() {
    var md = writeMarkdown.parse(result)[0];
    assert.equal(md[0], "### `foo`");
    assert.equal(md[1], "**Returns:** something else");
  });
});
