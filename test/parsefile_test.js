var parseFile = require("../src/parsefile.js");
var assert = require("assert");

describe("Parse File", function() {
  before(function() {
    parseFile.blocks = [];
  });
  it("can parse a function name comment", function() {
    var contents = [
      "/*DOC",
      " * @name foo",
      " * @returns something else",
      " */",
      "var foo = function() {}"
    ].join("\n");
    var res = parseFile.parse(contents);
    assert.equal(res.blocks[0].name, "foo");
    assert.equal(res.blocks[0].returns, "something else");
  });

  it("can parse parameters", function() {
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
    assert.equal(res.blocks[0].params.x, "description of x");
    assert.equal(res.blocks[0].params.y, "description of y");
  });
  it("can parse multiple functions", function() {
    var contents = [
      "/*DOC",
      " * @name foo",
      " * @returns something else",
      " */",
      "var foo = function() {}",
      "",
      "/*DOC",
      " * @name bar",
      " */",
      "var bar = function() {}"
    ].join("\n");
    var res = parseFile.parse(contents);
    assert.equal(res.blocks[0].name, "foo");
    assert.equal(res.blocks[1].name, "bar");
  });
});
