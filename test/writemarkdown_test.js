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

  it("can deal with parameters", function() {
    var contents = [
      "/*DOC",
      " * @name foo",
      " * @param x description of x",
      " * @param y description of y",
      " * @returns something else",
      " */",
      "var foo = function() {}"
    ].join("\n");
    var res = parseFile.parse(contents);
    var md = writeMarkdown.parse(res)[0];
    assert.equal(md[1], "Parameters:");
    var params = md[2].split("\n\n");
    assert.equal(params[0], "- `x`: description of x");
    assert.equal(params[1], "- `y`: description of y");

  });
});
