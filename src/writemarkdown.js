/*
 * @name writeMarkdown
 * @description writeMarkdown module
 */
var writeMarkdown = {
  /*
   * @name parse
   * @param result the result of calling parseFile.parse(contents)
   * @returns an array of lines of markdown
   */
  parse: function(result) {
    var markdown = [];
    result.blocks.forEach(function(block) {
      var blockMarkdown = [];
      var headingLevel = block.isContainer ? "##" : "###";
      if(block.name) blockMarkdown.push(headingLevel + " `" + block.name + "`");
      if(block.description) blockMarkdown.push("_" + block.description + "_");

      if(Object.keys(block.params).length > 0) {
        blockMarkdown.push("Parameters:");
        var paramsMarkdown = [];
        for(var name in block.params) {
          paramsMarkdown.push("- `" + name + "`: " + block.params[name]);
        }
        blockMarkdown.push(paramsMarkdown.join("\n\n"));
      }
      if(block.returns) blockMarkdown.push("**Returns:** " + block.returns);

      markdown.push(blockMarkdown);
    }.bind(this));
    return markdown;
  }
};

module.exports = writeMarkdown;
