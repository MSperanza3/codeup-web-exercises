const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
const randomColor = colors[Math.floor(Math.random() * colors.length)];

// let analyzeColor = prompt(`Give me a Color and I will tell you about it`);
//
// if (analyzeColor === 'red') {
//     alert(`Red is the color of blood`);
// } else if (analyzeColor === 'blue') {
//     alert(`Blue is the color of the sky`);
// } else {
//     alert(`Wow, never heard of ${analyzeColor} before!`);
// }
//
// console.log(`User inputs ${analyzeColor}`);

if (randomColor === 'red') {
    console.log('The color is red.');
} else if (randomColor === 'orange') {
    console.log('The color is orange.');
} else if (randomColor === 'yellow') {
    console.log('The color is yellow.');
} else if (randomColor === 'green') {
    console.log('The color is green.');
} else if (randomColor === 'blue') {
    console.log('The color is blue.');
} else if (randomColor === 'indigo') {
    console.log('The color is indigo.');
} else if (randomColor === 'violet') {
    console.log('The color is violet.');
} else {
    console.log('Unknown color.');
}