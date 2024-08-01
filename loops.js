//Loops:-
//We often need to repeat actions.
//for example, outputting goods from a list one after another or just running the same code for each number from 1 to 10.

//loops are a way to repeat the same code multiple time.

//javascript has several types of loops:-
//for loop
//do...while loop
//while loop
//for in loop
//for of loop

//1. for loop

// for(let i = 0; i <= 10; i++){
//     // console.log(i)
// }

// for(let table = 5; table <=50; table = table+5){
//     console.log(table)
// }

//even and odd number
// for(i = 0; i <= 10; i++){
//     if(i%2 == 0){
//         console.log(i)
//     }
// };

//2. while loop
// let i = 0;
// while (i<=10) {
//     console.log(i)
//     i++
// }

//3.do...while

// let i = 0;
// do {
//     console.log(i)
//     i++
// } while (i<10);

//4. for...in loop
// //objects
// let animal = {
//     name : "Tiger",
//     leg : 4,
//     age : 12
// };

// for(let key in animal){
//     console.log(key, `: ${animal[key]}`)
// }
// console.log(animal["name"])

//Arrays

// let names =["Raam", "Seeta", "Mohan", "Shyam"];
//  for(let index in names){
//     console.log(index, `Name : ${names[index]}`)
//  }

//5. for...of loop
let fruits = ["Mango", "Banana", "Apple", "Grapes"];

for(let fruit of fruits){

    console.log(fruit)
};










