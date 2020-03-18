// Constructor function:
function House(bedrooms, bathrooms, numSqft){
  this.bedrooms = bedrooms;
  this.bathrooms = bathrooms;
  this.numSqft = numSqft;
}

var firstHouse = new House(2,2,1000);
console.log("House example:", firstHouse.bedrooms, firstHouse.bathrooms, firstHouse.numSqft);

// Dog
function Dog(name, age){
  this.name = name;
  this.age = age;
  this.bark = function(){
    console.log(this.name + " just barked");
  }
}

var rusty = new Dog("Rusty", 1);
rusty.bark();

// Car / Motorcycle avoid duplication
function Car(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.numWheels = 4;
}

// Using call
function Motorcycle1(make, model, year){
  Car.call(this, make, model, year);
  this.numWheels = 2;
}

// Using apply
function Motorcycle2(make, model, year){
  Car.apply(this, [make, model, year]);
  this.numWheels = 2;
}

// Also using apply
function Motorcycle3(make, model, year){
  // 'arguments' is an array of [make, model, year]
  Car.apply(this, arguments);
  this.numWheels = 2;
}

var moto1 = new Motorcycle1('toyota', '???', 2000);
var moto2 = new Motorcycle2('toyota', '???', 2000);
var moto3 = new Motorcycle3('toyota', '???', 2000);
console.log(moto1.make, moto1.model, moto1.year, moto1.numWheels);
console.log(moto2.make, moto2.model, moto2.year, moto2.numWheels);
console.log(moto3.make, moto3.model, moto3.year, moto3.numWheels);


// Prototypes
function Person(name){
  this.name = name;
}

console.log(Person.prototype);    // this exists
var elie = new Person("Elie");
var colt = new Person("Colt");

console.log(elie.__proto__ === Person.prototype);       // true
console.log(Person.prototype.constructor);      // will print function Person(name){ ... }

Person.prototype.isInstructor = true;
console.log(elie.isInstructor);
console.log(colt.isInstructor);


// Refactoring using prototypes:
function Person(name){
  this.name = name;
  this.sayHi = function(){
    return "Hi " + this.name;
  }
}
// this code works but is inefficient
// every time we make an object using the new keyword, we have to redefine this function
// but it's the same for everyone -  put it on the prototype instead

function Person(name){
  this.name = name;
}
Person.prototype.sayHi = function(){
  console.log("Hi " + this.name);
}

elie = new Person("Elie");
elie.sayHi();

// Second refactoring example:
function Vehicule(make, model, year){
  this.make = make;
  this.model = model;
  this.year = year;
  this.isRunning = false;
}
Vehicule.prototype.turnOn = function(){
  this.isRunning = true;
}
Vehicule.prototype.turnOff = function(){
  this.isRunning = false;
}
Vehicule.prototype.honk = function(){
  if (this.isRunning) {
    console.log("Beep");
  }
}

var car = new Vehicule("fdjskl", "fjdksl", 2020);
car.turnOn();
car.honk();
