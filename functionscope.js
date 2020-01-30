

// but if you just call x in the console, it'll return 40 (not 10)
var x = 40

function doMath(n) {
  // this will override the outside definition of x
  var x = 10
  return n + x
}
