function isEven(n) {
  if (n % 2 == 0) {
    return true;
  }
  return false;
}

function factorial(n) {
  if (n == 0) {
    return 1
  }
  var f = 1
  for (var i = 1; i <= n; i++) {
    f = f*i
  }
  return f
}

var kebab = "hello-world"
var kebab2 = "fds-fdsa-af-das"

function kebabToSnake(string) {
  // replace all dashes with underscores
  // uses regular expressions, otherwise only replaces first instance of -
  return string.replace(/-/g, "_")
}

// other function examples
function sayHi() {
  console.log("hi")
}

function sayHi(name) {
  console.log("hi " + name)
}

function square(x) {
  console.log(x*x)
  return x*x
}
