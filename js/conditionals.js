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