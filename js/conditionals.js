const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];
function analyzeColor(randomColor) {
    switch (randomColor) {
        case "red":
            console.log('The color is red.')
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
}
console.log(`Your color is ${randomColor}`);
analyzeColor();
// let analyzeColor = prompt(`Give me a Color and I will tell you about it`);
//
// if (analyzeColor === 'red') {
//     alert(`Red is the color of blood`);
// } else if (analyzeColor === 'blue') {
//     alert(`Blue is the color of the sky`);
// } else {
//     alert(`Wow, never heard of ${analyzeColor} before!`);
// }
// console.log(`User inputs ${analyzeColor}`);

// let totalBill = parseInt(prompt('What was the total bill'))
// let luckyNum = parseInt(prompt('What was your lucky number'))
// function calculateLuckyNumber(luckyNum) {
//     if (luckyNum === 0) {
//         return 0;
//     } else if (luckyNum === 1) {
//         return 0.10;
//     } else if (luckyNum === 2) {
//         return 0.25;
//     } else if (luckyNum === 3) {
//         return 0.35;
//     } else if (luckyNum === 4) {
//         return 0.50;
//     } else if (luckyNum === 5) {
//         return 1.00;
//     } else {
//         console.log("Error");
//         return 0;
//     }
// }
// let discountMultiplier = calculateLuckyNumber(luckyNum);
// let totalAmountDue = totalBill - (totalBill * discountMultiplier);
// console.log(totalAmountDue);
// alert(`Your discount was ${discountMultiplier * 100}% and the total payment will be $${totalAmountDue.toFixed(2)}`);

let totalBill = parseInt(prompt('What was the total bill'))
const luckyNumber = Math.floor(Math.random() * 6);
function calculateLuckyNumber(luckyNumber) {
    if (luckyNumber === 0) {
        return 0;
    } else if (luckyNumber === 1) {
        return 0.10;
    } else if (luckyNumber === 2) {
        return 0.25;
    } else if (luckyNumber === 3) {
        return 0.35;
    } else if (luckyNumber === 4) {
        return 0.50;
    } else if (luckyNumber === 5) {
        return 1.00;
    } else {
        console.log("Error");
        return 0;
    }
}
let discountMultiplier = calculateLuckyNumber(luckyNumber);

let totalAmountDue = totalBill - (totalBill * discountMultiplier);
console.log(totalAmountDue);

alert(`Your discount was ${discountMultiplier * 100}% and the total payment will be $${totalAmountDue.toFixed(2)}`);

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
