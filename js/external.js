"use strict";

let messageExternal ="Hello from External JS";
console.log(messageExternal
);
let userChoice =confirm('Welcome to my Website!');
console.log(`The user's choice was: ${userChoice}`)
let userInput =prompt("What is you're favorite color?");
console.log(`User Input was ${userInput}`
)
let messageColor =`Great, ${userInput} is my favorite color too!`;
alert(messageColor)
let littleMermaidRentTime = 3;
let brotherBearRentTime = 5;
let herculesRentTime = 1;
let pricePerMovie = 3;
let totalAmountForMovies = (littleMermaidRentTime + brotherBearRentTime + herculesRentTime) * pricePerMovie
console.log(`Total amount spent for movies is $${totalAmountForMovies}!`)

