var age = prompt("what is your age")

if(age < 18){
  console.log("can't enter");
}

else if(age < 21){
  console.log("can't drink");
}

else {
  console.log("have fun")
}

if(age < 0){
  console.log("error")
}

if(age == 21){
  console.log("hbd 21");
}

if ((age % 2) == 1) {
  console.log("age is odd");
}

if (Number.isInteger(Math.sqrt(age))) {
  console.log("perfect square");
}
