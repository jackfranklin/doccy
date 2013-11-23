var parseFile = require("../src/parsefile.js");
var assert = require("assert");

describe("Parse File", function() {
  before(function() {
    parseFile.blocks = [];
  });
  it("can parse a function name comment", function() {
    var contents = [
      "/*",
      " * @name foo",
      " * @returns something else",
      " */",
      "var foo = function() {}"
    ].join("\n");
    var res = parseFile.parse(contents);
    assert.equal(res.blocks[0].name, "foo");
    assert.equal(res.blocks[0].returns, "something else");
  });

  it("can parse description", function() {
    var contents = [
      "/*",
      " * @description a cool method",
      " * @name foo",
      " */",
      "var foo = function() {}"
    ].join("\n");
    var res = parseFile.parse(contents);
    assert.equal(res.blocks[0].description, "a cool method");
  });

  it("can parse parameters", function() {
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
    assert.equal(res.blocks[0].params.x.desc, "description of x");
    assert.equal(res.blocks[0].params.y.desc, "description of y");
  });

  it("can parse parameters with types", function() {
    var contents = [
      "/*",
      " * @name foo",
      " * @param x {String} description of x",
      " * @returns something else",
      " */",
      "var foo = function() {}"
    ].join("\n");
    var res = parseFile.parse(contents);
    assert.equal(res.blocks[0].params.x.desc, "description of x");
    assert.equal(res.blocks[0].params.x.type, "String");
  });

  it("can parse object docs", function() {
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
    assert(res.blocks[0].isContainer);
    assert.equal(res.blocks[0].name, "foo");
    assert.equal(res.blocks[1].name, "bar");
  });


  it("can parse multiple functions", function() {
    var contents = [
      "/*",
      " * @name foo",
      " * @returns something else",
      " */",
      "var foo = function() {}",
      "",
      "/*",
      " * @name bar",
      " */",
      "var bar = function() {}"
    ].join("\n");
    var res = parseFile.parse(contents);
    assert.equal(res.blocks[0].name, "foo");
    assert.equal(res.blocks[1].name, "bar");
  });

});
