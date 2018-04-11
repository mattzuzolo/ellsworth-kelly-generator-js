
//Used to select theme that will display
function changeTheme () {

  // The ellsworth theme displays by default at document.ready
  document.addEventListener("DOMContentLoaded", function(event) {
        addElementEllsworth();
  });

  document.getElementById("ellsworth-button").onclick=function(){
        resetGrid("art");
        addElementEllsworth();
  };

  document.getElementById("random-button").onclick = function() {
        resetGrid("art");
        addElementRandom();
  };

  document.getElementById("tech-button").onclick=function(){
        resetGrid("art");
        addElementTech();
  };

}
changeTheme();


//This function will wipe existing grid by removing elements
function resetGrid(className) {

    //returns array-like object of all child elements
    var squares = document.getElementsByClassName(className);

    while (0 < squares.length) {
      squares[0].parentNode.removeChild(squares[0]);
    }
}




function addElementEllsworth () {

  //For loop will dynamically create specified number of empty divs (CSS will make them into squares)
  //WHY IS IT NOT COUNTING PROPERLY? DOUBLE THE SQUARES WHEN I++;
  for (var i = 0; i < 144; i++) {

    //Actually creating divs here
    var newDiv = document.createElement("div");
    var currentDiv = document.getElementById("div1");

    //Giving all the created divs for ability to change CSS of entire grid
    newDiv.className = 'art ' + 'square ' + i;
    newDiv.style.backgroundColor = randomEllsworthColor();

    //Putting them into the body of the file
    document.body.insertBefore(newDiv, currentDiv);

  }

} //Closes function addElementEllsworth

function addElementRandom () {

  //For loop will dynamically create specified number of empty divs (CSS will make them into squares)
  //WHY IS IT NOT COUNTING PROPERLY? DOUBLE THE SQUARES WHEN I++;
  for (var i = 0; i < 144; i++) {

    //Actually creating divs here
    var newDiv = document.createElement("div");
    var currentDiv = document.getElementById("div1");

    //Giving all the created divs for ability to change CSS of entire grid
    newDiv.className = 'art ' + 'square ' + i;
    newDiv.style.backgroundColor = randomColor();

    //Putting them into the body of the file
    document.body.insertBefore(newDiv, currentDiv);

  }

} //Closes function addElementEllsworth

function addElementTech () {

  //For loop will dynamically create specified number of empty divs (CSS will make them into squares)
  //WHY IS IT NOT COUNTING PROPERLY? DOUBLE THE SQUARES WHEN I++;
  for (var i = 0; i < 144; i++) {

    //Actually creating divs here
    var newDiv = document.createElement("div");
    var currentDiv = document.getElementById("div1");

    //Giving all the created divs for ability to change CSS of entire grid
    newDiv.className = 'art ' + 'square ' + i;
    newDiv.style.backgroundColor = randomTechColor();

    //Putting them into the body of the file
    document.body.insertBefore(newDiv, currentDiv);

  }

} //Closes function addElementEllsworth


//addElement no longer needs to be called in current program
//addElement();


//returns a random integer between 0 and <number passed into function as a parameter>.
function generateRandom (num) {

    return Math.floor(Math.random() * Math.floor(num));
}


//This function will return a random color (RGB value). The function forms the return value by assembling the proper RGB syntax and random numbers created in a different function.
function randomColor () {

      var maxRGBValue = 255;

      var r = generateRandom(maxRGBValue);
      var g = generateRandom(maxRGBValue);
      var b = generateRandom(maxRGBValue);

      var theColor = "rgb(" + r + "," + g + "," + b + ")";

      return theColor;
}


//Returns a hex value associated with Kelly's Spectrum painting at the SFMOMA
function randomEllsworthColor () {

    //Color hexes taken from the Ellsworth Kelly painting at the SFMOMA
    ellsworthColors = ["#2f2d2d","#c6becd","#ff8635","#3b354c","#94d35a","#f7f25e","#0170c1","#243881","#703550","#b38cb9","#7bc653","#do2624","#f2a00f","#f3e44e"];

    //Function returns a value from the above array. Index is randomly selected by generating a random index from the array.
    return ellsworthColors[generateRandom(ellsworthColors.length)];
}


//returns a color hex that big tech companies use.
function randomTechColor () {

    var airbnb = ["#FF5A5F","#00A699","#FC642D","#FC642D"];
    var facebook = ["#3B5998","#758fb6","#3B5998","#9297a2"];
    var twitter = ["#1DA1F2","#1DA1F2","#AAB8C2","#E1E8ED"];
    var google = ["#4285f4","#ea4336","#fbbc04","#34a853"];
    var microsoft = ["#f45326","#80bc0c","#08a6f0","#ffba11"];


    var techColors = [airbnb,facebook,twitter,google,microsoft];

    return techColors[generateRandom(techColors.length)][generateRandom(4)];
}
