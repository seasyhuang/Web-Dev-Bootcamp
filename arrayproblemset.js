console.log("print reverse");
a = ['a', 'b', 'c']
console.log(a);

function printReverse(array) {
  for (var i = array.length-1; i >= 0; i--) {
    console.log(array[i]);
  }
}

printReverse(a);

console.log("\nis uniform");
b = [1,1,1,1]
c = [1,1,1,2]
d = ['a','b','a','a']

function isUniform(array) {
  for (var i = 1; i < array.length; i++) {
    if (array[i-1] != array[i]) {
      return false;
    }
  }
  return true;
}

console.log(isUniform(b));
console.log(isUniform(c));
console.log(isUniform(d));

console.log("\nsum array");
// assumes that array is only numbers
function sumArray(array) {
  var sum = 0
  array.forEach(function(num){
    sum += num;
  });
  return sum;
}
console.log(sumArray(b));
console.log(sumArray(c));


console.log("\nmax array");

e = []
// assumes that array is only numbers
function maxArray(array) {
  var max = array[0]
  array.forEach(function(num){
    if (num > max) {
      max = num
    }
  });
  return max;
}
console.log(maxArray(b));
console.log(maxArray(c));

console.log("\n****");

// foreach
function myForEach(arr, func) {
  // loop through array
  for (var i = 0; i < arr.length; i++) {
    // call func for each item in the array
    func(arr[i]);
  }
}
colors = ["red", "blue", "orange"];
myForEach(colors, console.log);
