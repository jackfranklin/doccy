var writeMarkdown = {
  parse: function(result) {
    var markdown = [];
    result.blocks.forEach(function(block) {
      var blockMarkdown = [];
      blockMarkdown.push("### `" + block.name + "`");
      blockMarkdown.push("**Returns:** " + block.returns);

      markdown.push(blockMarkdown);
    }.bind(this));
    return markdown;
  }
};

module.exports = writeMarkdown;
