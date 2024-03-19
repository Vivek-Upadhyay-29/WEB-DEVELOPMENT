
var buttonColours = [ "red", "blue", "green", "yellow"] ;
var gamePattern = [];
var userClickedPattern = [];
$(".btn").clicked(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);


});


function nextSequence(){
    var randomNumber0 = Math.random()*4 ;
    var randomNumber = Math.floor(randomNumber0);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);

$("#"+randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);

var audio = new Audio("sounds/" + randomChosenColour+"mp3");
audio.play();

}