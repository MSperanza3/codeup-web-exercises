"use strict"
// ////////////////////////////////////////////Push and Unshift Arrays///////////////////////////////////////////
// const daysOfTheWeek = [`Monday`, `Tuesday`, `Wednesday`, `Thursday`];
// console.log(daysOfTheWeek)
// daysOfTheWeek.unshift('Sunday')
// console.log(daysOfTheWeek)
// daysOfTheWeek.push(`Friday`, `Saturday`)
// console.log(daysOfTheWeek)
// ///////////////////////////////////////////Pop and Shift Arrays//////////////////////////////////////////////
// const toDoList = ['Take out the trash', `Clean the car`, `Pay the bills`];
// console.log(toDoList);
// console.log(`Completing the last item : ${toDoList[toDoList.length - 1]}`)
// const removedItem = toDoList.pop();
// console.log(`Task complete: ${removedItem}`)
// console.log(`Completing the first item : ${toDoList[0]}`)
// const doneItem = toDoList.shift()
// console.log(`Task complete: ${doneItem}`)
// console.log(toDoList);
// ///////////////////////////////////////////Locating Array Elements//////////////////////////////////////////////
// const color = [`red`, `orange`, `yellow`, `green`, `blue`, `indigo`, `violet`, `red`];
// let index = color.indexOf(`green`);
// console.log(index)
// index = color.indexOf(`red`);
// console.log(index)
// index = color.lastIndexOf(`red`);
// console.log(index)
// //////////////////////////////////////////Locating Array Elements//////////////////////////////////////////////
// let slice = color.slice(2, 4);
// console.log(color)
// console.log(slice)
// slice = color.slice(3);
// console.log(slice)
// //////////////////////////////////////////Reversing///////////////////////////////////////////////////////
// console.log(`Reversing the color array.`)
// color.reverse();
// console.log(color)
// //////////////////////////////////////////Sorting///////////////////////////////////////////////////////
// console.log(`Sorting the colors now`);
// color.sort();
// console.log(color);
// //////////////////////////////////////////Converting between strings and arrays///////////////////////////////////////////////////////
// let namesString = `Joe,Bob,Sally`;
// console.log(namesString);
// const namesArray = namesString.split(`,`);
// console.log(namesArray);
// let newNamesString = namesArray.join(`,`);
// console.log(newNamesString)


let solorSystem = function() {
    console.log("Inside planets-array.js");

    var planets = [
        'Mercury',
        'Venus',
        'Earth',
        'Mars',
        'Jupiter',
        'Saturn',
        'Uranus',
        'Neptune'
    ];

    console.log('Adding "The Sun" to the beginning of the planets array.');
    planets.unshift("The Sun");
    console.log(planets);

    console.log('Adding "Pluto" to the end of the planets array.');
    planets.push("Pluto");
    console.log(planets);

    console.log('Removing "The Sun" from the beginning of the planets array.');
    planets.shift();
    console.log(planets);

    console.log('Removing "Pluto" from the end of the planets array.');
    planets.pop();
    console.log(planets);

    console.log('Finding and logging the index of "Earth" in the planets array.');
    console.log(planets.indexOf("Earth"));

    console.log("Reversing the order of the planets array.");
    planets.reverse();
    console.log(planets);

    console.log("Sorting the planets array.");
    planets.sort();
    console.log(planets);
};
console.log(solorSystem());
