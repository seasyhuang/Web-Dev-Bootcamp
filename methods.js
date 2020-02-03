var comments = {};
comments.data = ["good", "cool", "weeee"];
comments.print = function() {
  this.data.forEach(function(el){
    console.log(el)
  })
  // this refers to the object comments
}
