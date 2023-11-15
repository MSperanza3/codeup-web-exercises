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

// const userColor = prompt(`Give me a Color and I will tell you about it`);
// const colorMessage = analyzeColor(userColor)
// alert(colorMessage);

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

alert(`Congrats! your lucky number was ${luckyNumber}! Your discount was ${discountMultiplier * 100}% and the total payment will be $${totalAmountDue.toFixed(2)}`);

const userContinue = confirm(`Do you want to enter a number?`)

if(userContinue) {
    const userNumber = prompt(`Enter a Number`);
    if (!isNaN(userNumber)) {
        const isEven = userNumber % 2 === 0;
        const isPlus100 = parseInt(userNumber) + 100;
        const isLessThenZero = userNumber >= 0;
        alert(`${userNumber} is ${isEven ? 'even' : 'odd'}, 100 + ${userNumber} = ${isPlus100}, and ${userNumber} is ${isLessThenZero ? 'Positive' : 'Negative'}`)
    }
}
