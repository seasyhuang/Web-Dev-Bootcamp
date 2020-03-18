// closures
function outer(){
  var data = "closures are "
    return function inner(){
      var innerData = "awesome";
      return data + innerData;
    }
}

console.log(outer());
console.log(outer()());
