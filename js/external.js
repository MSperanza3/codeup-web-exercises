"use strict";

let messageExternal ="Hello from External JS";
console.log(messageExternal
);
let userChoice =confirm('Welcome to my Website!');
console.log(`The user's choice was: ${userChoice}`)
let userInput =prompt("What is you're favorite color?");
console.log(`User Input was ${userInput}`)
alert(`Great, ${userInput} is my favorite color too!`)
//Exercise 3
let littleMermaidRentTime = prompt(`What is your rent time of the movie Little Mermaid?`);
let brotherBearRentTime = prompt(`What is your rent time of the movie Brother Bear?`);
let herculesRentTime = prompt(`What is your rent time of the movie Hercules?`);
let totalPrice = prompt(`How much did it cost to rent each movie?`)
let totalAmountForMovies = (littleMermaidRentTime * totalPrice) + ( brotherBearRentTime * totalPrice) + (herculesRentTime * totalPrice)
alert(`Total amount you paid for the movies is $${totalAmountForMovies}`);
let googlePayPerHour = prompt(`How much did you make at Google?`);
let googleHoursWorked = prompt(`How many hours did you work at Google?`);
let amazonPayPerHour = prompt(`How much did you make at Amazon?`)
let amazonHoursWorked = prompt(`How many hours did you work at Amazon?`);
let facebookPayPerHour = prompt(`How much did you make at Facebook?`)
let facebookHoursWorked = prompt(`How many hours did you work at Facebook?`);
let totalAmountPaid = (googleHoursWorked * googlePayPerHour) + (amazonHoursWorked * amazonPayPerHour) + (facebookHoursWorked * facebookPayPerHour)
alert(`Total amount you made is $${totalAmountPaid}`)
//End of Lesson
