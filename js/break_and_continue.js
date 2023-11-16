"use strict"

function promptUser() {
    let userNumber;
    do {
        userNumber =prompt(`Enter a odd number between 1 and 50`);
        userNumber = parseInt(userNumber);
        if (userNumber >= 1 && userNumber <= 50 && userNumber % 2 !== 0) {
            break;
        } else {
            alert(`Invalid Input, please try again`)
        }
    } while(true);
    for (let i = 1; i <= 50; i++) {
        if (i === userNumber) {
            console.log(`We are skipping ${userNumber}`)
        continue;
        }
        if (i % 2 !== 0) {
            console.log(`Here is an odd number: ${i}`)
        }
    }
}
console.log(promptUser());


