/*
JavaScript includes primitive and non-primitive data types. 
The primitive data types in JavaScript include 
1. string 
2. number 
3. boolean 
4. undefined 
5. null 
6. symbol 
7. bigint 
The non-primitive data type includes the 
 object. 
*/


 //string
let a = "Hello World"; 
let name = "John Cena";

 //number
let height = 25; 
let weight = 17.5;

//booleans
let x = true;
let y = false;

let num1 = 3 < 5;

let num2 = 10 > 2;

// console.log(num1)  

//null
let fruits = null;

//undefined
let animals;


//bigint
let total = BigInt("123456789012345678901234567890");

/* 
JavaScript BigInt is a new datatype that can be used to store integer values that are too big to be represented by a normal JavaScript Number. 
*/
/* An integer is a whole number (not a fractional number) that can be positive, negative, or zero. Examples of integers are: -5, 1, 5, 8, 97, and 3,043. Examples of numbers that are not integers are: -1.43, 1 3/4, 3.14, .09, and 5,643.1. */

//array
let brands = ["Hero", "TVS", "Bajaj"];

//object 
let form = {
    fisrtName:"Vinay",
    lastName:"Kumar"
};
// console.log(form)

let employee = {
    Name: "Raam",
    Age: 28,
    Gender: "Male"
};


let A = "hello";

let B = "hel'lo";

let C = "hel\"lo";

let X = typeof 20;
console.log(X);

let Z = "123";
console.log(typeof Z);



let greet = "Vinay";
console.log("Hello" + greet);

//template literals
console.log(`Hello ${greet}`);






