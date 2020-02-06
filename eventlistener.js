var texttochange = document.getElementById("changetext");
var clickme = document.getElementById("clickme");

clickme.addEventListener("click", function(){
  texttochange.textContent = "text changes";
  this.textContent = "button text also changes";        // this refers to clickme
});

var bod = document.querySelector("body");
var bttn = document.getElementsByClassName("change")[0];

bttn.addEventListener("click", function(){
  bod.classList.toggle("purple-bg");
  // document.body.classList.toggle("purple-bg");     // same thing
});
