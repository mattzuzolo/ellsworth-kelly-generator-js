//Grid setup
//Adjust gridHeight value to change grid size
const gridHeight = 38;
const gridSize = gridHeight ** 2;
//padding-bottom and width must be 1:1 ratio for div to be square.
const squareSize = `${100 / gridHeight}%`;

//DOM elements
const gridContainer = document.getElementById("div--grid-container");
const randomButton = document.getElementById("random-button");
const ellsworthButton = document.getElementById("ellsworth-button");
const techButton = document.getElementById("tech-button");
const subwayButton = document.getElementById("subway-button");

//Style constants
const maxRGBValue = 255;

const airbnb = ["#FF5A5F","#00A699","#FC642D","#FC642D"];
const facebook = ["#3B5998","#758fb6","#3B5998","#9297a2"];
const twitter = ["#1DA1F2","#1DA1F2","#AAB8C2","#E1E8ED"];
const google = ["#4285f4","#ea4336","#fbbc04","#34a853"];
const microsoft = ["#f45326","#80bc0c","#08a6f0","#ffba11"];
const techColors = [airbnb,facebook,twitter,google,microsoft];
const ellsworthColors = ["#2f2d2d","#c6becd","#ff8635","#3b354c","#94d35a","#f7f25e","#0170c1","#243881","#703550","#b38cb9","#7bc653","#do2624","#f2a00f","#f3e44e"];
const nycColors = ["#0039A6", "#FF6319", "#6CBE45", "#996633", "#A7A9AC", "#FCCC0A", "#EE352E", "#00933C", "#B933AD"]
//Shuttle train color: "#808183"

//generates random number. Max is arg
function generateRandom(num){
  return Math.floor(Math.random() * Math.floor(num));
}
//Creates a string with a randomly generated RGB value
function randomColor(){
  return `rgb(${generateRandom(maxRGBValue)}, ${generateRandom(maxRGBValue)}, ${generateRandom(maxRGBValue)})`
}
//randomEllsworthColor, randomTechColor and randomNycColor all generate a random color from arrays declared and assigned above
function randomEllsworthColor(){
  return ellsworthColors[generateRandom(ellsworthColors.length)];
}
function randomTechColor(){
  return techColors[generateRandom(techColors.length)][generateRandom(4)];
}
function randomNycColor(){
  return nycColors[generateRandom(nycColors.length)]
}
//This function wipes the grid so a new grid may be created without interference from existing grids
function resetGrid(className){
  let squares = document.getElementsByClassName(className);
  while (0 < squares.length){
    squares[0].parentNode.removeChild(squares[0]);
  }
}
//This function builds the grid. The appropriate colorPicker function is passed in based on a click event defined below.
//The size of the grid is determined by a constant above
function addElementRandom(colorPicker){
  for (let i = 0; i < gridSize; i++){
    let newDiv = document.createElement("div");
    newDiv.className = `art square ${i}`;
    //padding-bottom and width must be 1:1 ratio for div to be square.
    //Value determined above
    newDiv.style.width = squareSize;
    newDiv.style.paddingBottom = squareSize;
    newDiv.style.backgroundColor = colorPicker();
    gridContainer.append(newDiv)
  }
}

//This function runs on DOMContentLoaded and the event listeners wait for user to select a theme with the buttons created in HTML
//This function is immediately invoked
(function (event){
  document.addEventListener("DOMContentLoaded", function(event){
    addElementRandom(randomEllsworthColor)
  })
  randomButton.onclick = function(){
    resetGrid("art");
    addElementRandom(randomColor)
  }
  ellsworthButton.onclick = function(){
    resetGrid("art");
    addElementRandom(randomEllsworthColor)
  }
  techButton.onclick = function(){
    resetGrid("art");
    addElementRandom(randomTechColor)
  }
  subwayButton.onclick = function(){
    resetGrid("art");
    addElementRandom(randomNycColor)
  }
})();
