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
console.log(`User wrote with ${littleMermaidRentTime}`);
let brotherBearRentTime = prompt(`What is your rent time of the movie Brother Bear?`);
console.log(`User wrote with ${brotherBearRentTime}`);
let herculesRentTime = prompt(`What is your rent time of the movie Hercules?`);
console.log(`User wrote with ${herculesRentTime}`);
let totalPrice =3
let totalAmountForMovies = (littleMermaidRentTime * totalPrice) + ( brotherBearRentTime * totalPrice) + (herculesRentTime * totalPrice)
alert(`Total amount you paid for the movies is $${totalAmountForMovies}`);
let googlePayPerHour = 400;
let googleHoursWorked = prompt(`How many hours did you work at Google?`);
console.log(`user wrote ${googleHoursWorked}`);
let amazonPayPerHour = 380
let amazonHoursWorked = prompt(`How many hours did you work at Amazon?`);
console.log(`user wrote ${amazonHoursWorked}`);
let facebookPayPerHour = 350
let facebookHoursWorked = prompt(`How many hours did you work at Facebook?`);
console.log(`user wrote ${facebookHoursWorked}`);
let totalAmountPaid = (googleHoursWorked * googlePayPerHour) + (amazonHoursWorked * amazonPayPerHour) + (facebookHoursWorked * facebookPayPerHour)
alert(`Total amount you made is $${totalAmountPaid}`)
//End of Lesson