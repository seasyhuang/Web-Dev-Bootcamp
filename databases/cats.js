var mongoose = require("mongoose");

// will look for cat app db, make one if not found (mongo must be running)
mongoose.connect('mongodb://localhost:27017/cat_app');

// define general structure of a cat
var catSchema = mongoose.Schema({
  name: String,
  age: Number,
  personality: String
});

// take catSchema and compile it into the model, save the model into variable
// now we can use Cat to do things to our db w methods
// model should always be the singular version of our model, will automatically pluralize it
var Cat = mongoose.model("Cat", catSchema);

function addAndSaveCat() {
  // add new cat to db
  var george = new Cat({
    name: "Mrs. Norris",
    age: 20,
    personality: "Evil"
  });

  // callback function is in there to give us information
  // the process takes a long time
  // err - potential error
  // cat - object being added to db
  george.save(function(err, cat){
    if (err) {
      console.log("something went wrong");
    } else {
      console.log("WE JUST SAVED A CAT TO THE DB");
      console.log(cat);
    }
  });
}

// addAndSaveCat();

function findAllCats(){
  // retrieve all cats from the db and log each one
  Cat.find({}, function(err, cats){
    if (err) {
      console.log("oh no, error");
    } else {
      console.log("all the cats");
      console.log(cats);
    }
  });
}

findAllCats();

// new AND save cat at the same time
function createCat(){
    Cat.create({
      name: "Snow",
      age: 5,
      personality: "nice"
    }), function(err, cat){
      if (err) {
        console.log(err);
      } else {
        console.log(cat);
      }
    };
}

// createCat();
