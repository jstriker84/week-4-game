//define variables
var wins = 0;
var losses = 0;
var totScore = 0;
//variables appear in the html
$("#score").html(totScore);
$("#wins").html(wins);
$("#losses").html(losses);

var randNumber = Math.floor((Math.random() * 101) + 19);
//random number appears in the h2
$("#random-number").html(randNumber);
//define variables for random numbers attached to images
var gemStone1 = Math.floor((Math.random() * 12) + 1);
var gemStone2 = Math.floor((Math.random() * 12) + 1);
var gemStone3 = Math.floor((Math.random() * 12) + 1);
var gemStone4 = Math.floor((Math.random() * 12) + 1);

//functions

//function to reset game
function reset() {
	totScore = 0;
	$("#score").html(totScore);
	randNumber = Math.floor((Math.random() * 101) + 19);
	$("random-number").html(randNumber);
	gemStone1 = Math.floor((Math.random() * 12) + 1);
	gemStone2 = Math.floor((Math.random() * 12) + 1);
	gemStone3 = Math.floor((Math.random() * 12) + 1);
	gemStone4 = Math.floor((Math.random() * 12) + 1);
};
//if the score is equal to the random number variable,
function scoreCalc() {
if(totScore === randNumber) {
	wins++;
	$("#wins").html(wins);
	$("#score").html(totScore);
	alert("You win!");
	reset();
//if score > random number variable,
//add 1 to losses
//start game again
} else if(totScore > randNumber) {
	losses++;
	$("#losses").html(losses);
	$("#score").html(totScore);
	alert("You lose.");
	reset();
//if score < random number, keep game going
} else if(totScore < randNumber) {
	$("#score").html(totScore);
}
};
//function to add random gem values to score on click event
$(document).ready(function() {
	$("#gem1").on("click", function() {
		totScore += gemStone1;
		console.log(totScore += gemStone1)
		scoreCalc();
	});
	$("#gem2").on("click", function() {
		totScore += gemStone2;
		console.log(totScore += gemStone2)
		scoreCalc();
	});		
	$("#gem3").on("click", function() {
		totScore += gemStone3;
		console.log(totScore += gemStone3)
		scoreCalc();
	});
	$("#gem4").on("click", function() {
		totScore += gemStone4;
		console.log(totScore += gemStone4)
		scoreCalc();
	});

});