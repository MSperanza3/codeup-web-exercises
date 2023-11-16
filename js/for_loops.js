"use strict"
// while (/*condition*/) {
// // body }
//
// function promptUser() {
//     let userNumber;
//     do {
//         userNumber =prompt(`Enter a number between 1 and 10`);
//     } while(userNumber < 1 || userNumber > 10);
//     return userNumber;
// }
// console.log(promptUser());

let i = 1
let table = "";
do {
    let result = 7 * i
    table += `7 * ${i} = ${result} \n`; {
        i++
    }
} while (i <= 10);
console.log(table);

let numberToStopAt = 10
const getRandomNumber =(min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min)
}
for (i = 0; 1 < 10; i++) {
    let randomNumber = getRandomNumber(20, 200);
    let result = (randomNumber % 2 === 0) ?`even` : `odd`;
    if (i === numberToStopAt) {
        console.log(`That is enough`);
        break;
    }
    console.log(`${randomNumber} is ${result}` )
}
for (let i = 1; i <= 9; i++) {
    let line = "";

    for (let j = 1; j <= i; j++) {
        line += i;
    }
    console.log(line);
}
let numberToStop = 0
for (let i = 100; i >= 0; i -= 5) {
    console.log(i);
}
