var express = require("express");
var app = express();

app.get('/', function(req,res){
  res.send("Welcome to my assignment");
});

////////////////////////////////////////

app.get('/speak/:animal', function(req,res){
  var sounds = {
    pig: "oink!",
    cow: "moo!",
    cat: "I hate you human.",
    dog: "woof!",
    goldfish: "..."
  }
  var animal = req.params.animal.toLowerCase();
  var sound = "nothing.";
  if (sounds[animal] != undefined) {
    sound = '"' + sounds[animal] + '"';
  }
  // if (animal == "dog") {
  //   sound = "woof!";
  // } else if (animal == "cat") {
  //   sound = "meow!";
  // }
  // else if (animal == "cow") {
  //   sound = "moo!";
  // }
  res.send("The " + animal + " says " + sound);
});

////////////////////////////////////////

app.get("/repeat/:word/:num", function(req, res) {
  var word = req.params.word;
  var num = Number(req.params.num);
  var sendStr = "";

  for (var i = 0; i < num; i++) {
    sendStr += word + " ";
  }

  res.send(sendStr);
});

app.get('*', function(req, res){
  res.send("what are you doing with your life")
});

app.listen(3000, function() {
  console.log('Starting assignment');
});
