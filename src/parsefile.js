var FunctionBlock = function() {
  this.lines = [];
};

FunctionBlock.prototype = {
  addLine: function(line) {
    this.checkNameMatch(line);
    this.checkReturnMatch(line);
    this.lines.push(line);
  },
  checkNameMatch: function(line) {
    var match = /@name ([A-z0-9_]*)/i.exec(line);
    if(match) this.name = match[1];
  },
  checkReturnMatch: function(line) {
    var match = /@returns (.+)/i.exec(line);
    if(match) this.returns = match[1];
  }
};

var parseFile = {
  blocks: [],
  parse: function(fileContents) {
    var functionBlock;
    fileContents.split("\n").forEach(function(item) {
      var line = item.trim();
      if(line == "/*DOC") {
        functionBlock = new FunctionBlock();
      };
      if(line == "*/" && functionBlock != undefined) {
        this.blocks.push(functionBlock);
        functionBlock = undefined;
      }
      if(functionBlock != undefined && line[0] == "*" ) {
        functionBlock.addLine(line);
      }
    }.bind(this));
    return this;
  }
};

module.exports = parseFile;
