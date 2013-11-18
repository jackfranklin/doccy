var writeMarkdown = {
  parse: function(result) {
    var markdown = [];
    result.blocks.forEach(function(block) {
      var blockMarkdown = [];
      if(block.name) blockMarkdown.push("### `" + block.name + "`");
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
