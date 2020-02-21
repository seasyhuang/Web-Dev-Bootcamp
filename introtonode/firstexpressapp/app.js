var express = require("express");
var app = express();

// '/' --> hi
app.get("/", function(req, res){
  res.send("yeet");
});

// '/bye' --> goodbye
app.get("/bye", function(req, res){
  res.send("goodbye");
});

// '/dog' --> meow
app.get("/dog", function(req, res){
  res.send("meow");
  console.log("someone made a request at dog");
});

// pattern
app.get("/r/:subreddit", function(req, res){
  var sr = req.params.subreddit;
  res.send("welcome to the " + sr + " subreddit");
  console.log(req.params);
});

app.get("/r/:subreddit/comments/:id/:title", function(req, res){
  res.send("wecome to comment page");
  console.log(req.params);
  // example: http://localhost:3000/r/fd/comments/43124/fdjksla
});

// everything else - needs to be at the end END of the other routes
app.get("*", function(req, res){
  res.send("everything else");
});

// need this line: to listen for requests
app.listen(3000, function() {
  console.log('Server listening on port 3000');
});
