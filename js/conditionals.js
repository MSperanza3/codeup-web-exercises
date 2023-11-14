const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

let analyzeColor = prompt(`Give me a Color and I will tell you about it`);

if (analyzeColor === 'red') {
    alert(`Red is the color of blood`);
} else if (analyzeColor === 'blue') {
    alert(`Blue is the color of the sky`);
} else {
    alert(`Wow, never heard of ${analyzeColor} before!`);
}

console.log(`User inputs ${analyzeColor}`);

switch (randomColor) {
    case "red":
    console.log('The color is red.');
    break;
    case "orange":
        console.log('The color is orange.');
        break;
    case "yellow":
        console.log('The color is yellow.');
        break;
    case "green":
        console.log('The color is green.');
        break;
    case "blue":
        console.log('The color is blue.');
        break;
    case "indigo":
        console.log('The color is indigo.');
        break;
    case "violet":
        console.log('The color is violet.');
        break;
}

let totalBill = parseInt(prompt('What was the total bill'))
let luckyNum = parseInt(prompt('What was your lucky number'))
if (luckyNum === 0) {
    console.log(luckyNum)
} else if (luckyNum === 1) {
    console.log(luckyNum = 10)
} else if (luckyNum === 2) {
    console.log(luckyNum = 25)
} else if (luckyNum === 3) {
    console.log(luckyNum = 35)
} else if (luckyNum === 4) {
    console.log(luckyNum = 50)
} else if (luckyNum === 5) {
    console.log(luckyNum = 100)
} else {
    console.log("Error")
}
alert(`You're discount was ${luckyNum}% and the total pay will be $${totalBill - (totalBill * (luckyNum / 100)).toFixed(2)}`);

//
// /**
//  * TODO:
//  * Uncomment the line below to generate a random number between 0 and 5.
//  * (In this line of code, 0 is inclusive, and 6 is exclusive)
//  * Prompt the user for their total bill, then use your `calculateTotal` function
//  * and alerts to display to the user what their lucky number was, what their
//  * price before the discount was, and what their price after the discount is.
//  */
// // Generate a random number between 0 and 6
// const luckyNumber = Math.floor(Math.random() * 6);
// if (luckyNumber === 0) {
//     console.log(luckyNumber)
// } else if (luckyNumber === 1) {
//     console.log(luckyNumber = 10)
// } else if (luckyNumber === 2) {
//     console.log(luckyNumber = 25)
// } else if (luckyNumber === 3) {
//     console.log(luckyNumber = 35)
// } else if (luckyNumber === 4) {
//     console.log(luckyNumber = 50)
// } else if (luckyNumber === 5) {
//     console.log(luckyNumber = 100)
// } else {
//     console.log("Error")
//
// /**
//  * TODO:
//  * Write some JavaScript that uses a `confirm` dialog to ask the user if they
//  * would like to enter a number. If they click 'Ok', prompt the user for a
//  * number, then use 3 separate alerts to tell the user:
//  *
//  * - whether the number is even or odd
//  * - what the number plus 100 is
//  * - if the number is negative or positive
//  *
//  * Do *NOT* display any of the above information
//  * if the user enters a value that is not of the number data type.
//  * Instead, use an alert to inform them of the incorrect input data type.
//  *
//  *
//  * Can you refactor your code to use functions?
//  * HINT: The way we prompt for a value could be improved
let funNumber = confirm(`Would you like to enter a number?`)
if (funNumber === true) {
    let threeChoices = parseInt(prompt(`What is you're number?`))
    if (threeChoices > 100) {
        alert(`You're number is greater then 100`)
    } else {
        alert(`You're number is less then 100`)
    } if (threeChoices % 2 === 0) {
        alert(`You're number is even`)
    } else {
        alert(`You're number is odd`)
    } if (threeChoices > 0) {
        alert(`You're number is Positive`)
    } else if (threeChoices < 0) {
        alert(`You're number is Negative`)
    } else {
        alert(`You're number is 0`)
    }
} else if (funNumber === false) {
    alert(`Oh, that's too bad`)
}
