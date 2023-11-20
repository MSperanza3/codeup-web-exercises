"use strict"
// //////////////////////////////////////Basic Array/////////////////////////////////////////////////////////
// const shapes =[`square`, `rectangle`, `circle`, `triangle`];
// // console.log(`There are ${shapes.length} shapes in the array`);
// // console.log(`The first shape is ${shapes[0]}`);
// // console.log(`The second shape is ${shapes[1]}`);
// // console.log(`The third shape is ${shapes[2]}`);
// // console.log(`The last shape is ${shapes[3]}`);
// //////////////////////////////////////For Loop/////////////////////////////////////////////////////////
// for (let i = 0; i < shapes.length; i++) {
//     console.log(`The shape at index ${i} is ${shapes[i]}`)
// }
// //////////////////////////////////////For...of Loop/////////////////////////////////////////////////////////
// const iterable =[1, 2, 3, 4, 5];
// for (let element of iterable) {
//     console.log(element)
// }
// //////////////////////////////////////For-Each Loop/////////////////////////////////////////////////////////
// shapes.forEach(shapes => console.log(`Here is a lovely shape: ${shapes}.`));
// //////////////////////////////////////Spread Syntax/////////////////////////////////////////////////////////
// const arr = [3,5,7]
// function randomNumber(min, max) {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// }
// const newArr = [...arr, randomNumber(23, 43)];
// console.log(newArr);
//
// const someNums = [12, 42];
// function multiply(num1, num2) {
//     return num1 * num2
// }
// console.log(multiply(...someNums));
// //////////////////////////////////////Can add specific values in a Array/////////////////////////////////////////////////////////
// function add (...arr){
//     let total = 0;
//     for (let i = 0; i < arr.length; i++){
//         total += arr[i];
//     }
//     return total;
// }
// console.log(add(3, 5))
// //////////////////////////////////////Adds all values in Array/////////////////////////////////////////////////////////
// const randNumArr1 =[55, 1, 58, 66, 65, 92, 6, 87, 71, 48, 36, 96];
// console.log(add(...randNumArr1));
// const randNumArr2 = [72, 5, 90, 11, 43, 22, 100, 21];
// console.log(add(...randNumArr2));

const names = [`Matteo`, `Leo`, `Dystini`, `Reign`]

console.log(names.length)

console.log(`The names in the array are: ${names[0]}, ${names[1]}, ${names[2]}, and ${names[3]}.`)

for (let name of names) {
    console.log(`Hi, my name is ${name}`)
}
names.forEach(names => console.log(`Here are the names again: ${names}`))

const numbers = [1,2,3,4,5];
function first(array) {
    return numbers[0]
}
function second(array) {
    return numbers[1]
}
function last(array) {
    return numbers[numbers.length - 1];
}
console.log(`The first, second and last numbers are: \n ${first(numbers)}, ${second(numbers)}, ${last(numbers)}`)