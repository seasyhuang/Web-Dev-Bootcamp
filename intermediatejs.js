// Keyword This: Call

var colt = {
  first: "Colt",
  sayHi: function(){
    console.log("Hi " + this.first);
  },
  addNumbers: function(a,b,c,d){
    console.log(this.first + " just calculated " + (a+b+c+d));
  }
}

var elie = {
  first: "Elie"
}

colt.sayHi();
colt.sayHi.call(elie);

// Keyword This: Call vs Apply
colt.addNumbers(1,2,3,4);
colt.addNumbers.call(elie, 1,2,3,4);
colt.addNumbers.apply(elie, [1,2,3,4]);

// Keyword This: Bind
var elieCalc = colt.addNumbers.bind(elie, 1,2,3,4);
elieCalc();     // Elie just calculated 10

// We don't need to know all the arguments up front
var elieCalc2 = colt.addNumbers.bind(elie, 1,2);
elieCalc2(3,4);     // Elie just calculated 10

// Bind: asynchronous function example
var colt = {
  first: "Colt",
  sayHi: function(){
    setTimeout(function(){
      console.log("Hi " + this.first);
    }, 1000)                     // without binding: this no longer refers to "Colt" but the global object
    // }.bind(this), 1000)          // after binding, refers to "Colt"
  }
}

colt.sayHi();

// New
function Person(first, last){
  this.first = first;
  this.last = last;
}
var elie = new Person("Elie", "Last");
console.log(elie.first);
console.log(elie.last);
