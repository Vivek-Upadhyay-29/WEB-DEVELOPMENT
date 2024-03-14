var random1 = Math.random * 6;
var randomNumber = Math.floor(random1 + 1);

var randomDiceImage = "./dice" + randomNumber + ".png";
var randomImageSource = "./"+randomDiceImage ; 

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage);


