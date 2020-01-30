var todos = ["Buy New Turtle"];

window.setTimeout(function() {
  var input=prompt("what would you like to do")
  while (input != "quit") {
    if (input == "list") {
      console.log(todos);
    }
    else if (input == "new") {
      var newtodo = prompt("enter new todo");
      todos.push(newtodo);
    }
    input=prompt("what would you like to do")
  }
  console.log("ok you quit");

}, 500);
