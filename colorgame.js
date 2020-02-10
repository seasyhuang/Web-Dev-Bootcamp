var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetBtn = document.getElementById("resetbtn");
var modeBtns = document.querySelectorAll(".mode");

init();

function init(){
  setupModeBtns();
  setupSquares();
  reset();
}

function setupModeBtns(){
  for (var i = 0; i < modeBtns.length; i++) {
    modeBtns[i].addEventListener("click", function(){
      modeBtns[0].classList.remove("selected");
      modeBtns[1].classList.remove("selected");
      this.classList.add("selected");
      // ternary operator:
      this.textContent == "easy" ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
}

function setupSquares(){
  for (var i = 0; i < squares.length; i++) {
    // add click listeners to squares
    squares[i].addEventListener("click", function(){
      // grab color of clicked squares
      var clickedColor = this.style.backgroundColor;
      // compare color to picked color
      if (clickedColor == pickedColor) {
        // correct
        resetBtn.textContent = "Play again?";
        messageDisplay.textContent = "Correct!"
        messageDisplay.style.color = clickedColor;
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323"
        messageDisplay.textContent = "Try Again"
      }
    });
  }
}


function reset(){
  // resetting things to before
  resetBtn.textContent = "new colors";
  messageDisplay.textContent = "";
  h1.style.backgroundColor = 'steelblue';
  resetBtn.textContent = "new colors";

  // reset logic
  colors = generateRandomColors(numSquares);
  pickedColor = pickColor();
  colorDisplay.textContent = pickedColor;
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = 'block';
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = 'none';
    }
}
};

resetBtn.addEventListener("click", function(){
  reset();
});


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

function setSquareColors(){
  colors = generateRandomColors(6);
  for (var i = 0; i < colors.length; i++) {
    squares[i].style.backgroundColor = colors[i];
  }
}
