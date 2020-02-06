var colors = generateRandomColors(6);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");

colorDisplay.textContent = pickedColor;

for (var i = 0; i < squares.length; i++) {
  // add initial colors to squares
  squares[i].style.backgroundColor = colors[i];

  // add click listeners to squares
  squares[i].addEventListener("click", function(){
    // grab color of clicked squares
    var clickedColor = this.style.backgroundColor;
    console.log(clickedColor);

    // compare color to picked color
    if (clickedColor == pickedColor) {
      // correct
      messageDisplay.textContent = "Correct!"
      changeColors(clickedColor);
      h1.style.backgroundColor = clickedColor;
    } else {
      this.style.backgroundColor = "#232323";
      messageDisplay.textContent = "Try Again"
    }
  });
}

function changeColors(color) {
  // loop through all squares
  for (var i = 0; i < colors.length; i++) {
    // change to same as picked color
    squares[i].style.backgroundColor = color;
  }
};

function pickColor(){
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num){
  // make an array of random colors
  var arr = [];
  for (var i = 0; i < num; i++) {
    // get random color
    var color = randomColor();
    // add num random colors to array
    arr.push(color);
  }
  return arr;
}

function randomColor(){
  // pick a "red" from 0-255
  var red = Math.floor(Math.random() * 256);
  // pick a "green" from 0-255
  var green = Math.floor(Math.random() * 256);
  // pick a "blue" from 0-255
  var blue = Math.floor(Math.random() * 256);
  var color = "rgb(" + red + ", " + green + ", " + blue + ")";
  return color;
}
