var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo");

// post - title, content
var postSchema = new mongoose.Schema({
  title: String,
  content: String
});
var Post = mongoose.model("Post", postSchema);

// user - email, name
var userSchema = new mongoose.Schema({
  email: String,
  name: String,
  posts: [postSchema]
});
var User = mongoose.model("User", userSchema);

// data will look like this:
// {
//   email: "jvdksla",
//   name:"fjdksl",
//   posts: [
//     {
//       title:...,
//       content:...
//     }
//   ]
// }

// // creating a new user and post associated with the user
// var newUser = new User({
//   email: "hermione@hogwarts.edu",
//   name: "hermione"
// });
//
// newUser.posts.push({
//   title:"how to brew polyjuice potion",
//   content:"fjdksljfk",
// });
//
// newUser.save(function(err, user){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(user);
//   }
// });

// // make a new post
// var newPost = new Post({
//   title: "reflections on apples",
//   name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
// });
// newPost.save(function(err, post){
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// })

// // retrieve a user
User.findOne({name: "hermione"}, function(err, user){
  if (err) {
    console.log(err);
  } else {
    // pushing a post
    user.posts.push({
      title: "three things i hate",
      name: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiu"
    });

    // saving the post to the user/db
    user.save(function(err, user){
      if (err) {
        console.log(err);
      } else {
        console.log(user);
      }
    })
  }
})
