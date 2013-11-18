var parseFile = require("../src/parsefile.js");
var assert = require("assert");

describe("Parse File", function() {
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
});
