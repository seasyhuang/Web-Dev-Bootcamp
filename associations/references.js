var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo_2");

// modules
var Post = require("./models/post");
var User = require("./models/user");

// User.create({
//   email:"fjdkslaj@gmail.com",
//   name: "bob"
// });
// // no callback because we assume it's going to work

// // new post and associate it with user
// Post.create({
//   title: "how to cook the best burger 4",
//   content: "blah balh ablaha halaha ",
// }, function(err, post){
//   User.findOne({name: "bob"}, function(err, foundUser){
//     if (err) {
//       console.log(err);
//     } else {
//       foundUser.posts.push(post);
//       foundUser.save(function(err, data) {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(data);
//         }
//       })
//     }
//   })
// });

// find user and find all posts for the users
User.findOne({name:"bob"}).populate("posts").exec(function(err, user){
  if (err) {
    console.log(err);
  } else {
    console.log(user);
  }
})
