var mongoose = require("mongoose");

// user - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  // array of post ids
  posts: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post",
  }]
});

// like a return function for a file
module.exports = mongoose.model("User", userSchema);
