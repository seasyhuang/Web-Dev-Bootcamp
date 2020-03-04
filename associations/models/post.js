var mongoose = require("mongoose");

// post - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

// like a return function for a file
module.exports = Post;
