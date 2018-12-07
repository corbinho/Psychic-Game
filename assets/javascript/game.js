
$(document).ready(function() {
var letters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']

var wins = 0
var losses = 0
var guessLeft = 10
var randomLetter = letters[Math.floor(Math.random() * letters.length)];
var correct = false
var marioCoin = new Audio('assets/javascript/Mario-coin-sound.mp3');
var priceis = new Audio ('assets/javascript/Price.mp3');


document.onkeyup = function(event){
    userGuess = event.key;
    console.log("random letter " + randomLetter);
    if (userGuess === randomLetter){
        wins++;
        $("#wins").text("Wins: " + wins);
        guessLeft = 10;
        $("#guessesLeft").text("Guesses Left: " + guessLeft);
        $("#guesses").text("Your guesses so far: ")
        randomLetter = letters[Math.floor(Math.random() * letters.length)];
        marioCoin.play();
    } else if ( userGuess !== randomLetter && guessLeft === 1) {
        losses++;
        $("#losses").text("Losses: " +losses);
        $("#guesses").text("Your guesses so far: ")
        guessLeft = 10;
        $("#guessesLeft").text("Guesses Left: " + guessLeft);
        priceis.play();
        randomLetter = letters[Math.floor(Math.random() * letters.length)];

    } else if (userGuess !== randomLetter){
        guessLeft--;
        $("#guessesLeft").text("Guesses Left: " + guessLeft);
        $("#guesses").append(userGuess + " ");
    }
    
}



})