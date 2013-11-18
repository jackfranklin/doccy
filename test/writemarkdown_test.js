var writeMarkdown = require("../src/writemarkdown.js");
var parseFile = require("../src/parsefile.js");
var assert = require("assert");

describe("Writing Markdown", function() {
  var result;
  before(function() {
    var contents = [
      "/*",
      " * @description blah blah blah",
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
    assert.equal(md[1], "_blah blah blah_");
    assert.equal(md[2], "**Returns:** something else");
  });

  it("outputs bigger headings for containers", function() {
    var contents = [
      "/*",
      " * @object foo",
      " */",
      "",
      "/*",
      " * @name bar",
      " */"
    ].join("\n");
    var res = parseFile.parse(contents);
    var md = writeMarkdown.parse(res);
    assert.equal(md[0][0], "## `foo`");
    assert.equal(md[1][0], "### `bar`");
  });

  it("can deal with parameters", function() {
    var contents = [
      "/*",
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
