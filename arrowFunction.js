//function declaration

// function sum(a, b){
//     console.log(a + b);
// };
// sum(5,5)

let greet = function(name){
    console.log("Hello :" + name);
    
}
greet("Vinay")

//There’s another very simple and concise syntax for creating functions, that’s often better than Function Expressions.
//It’s called “arrow functions”


//As you can see, (a, b) => a + b means a function that accepts two arguments named a and b. Upon the execution, it evaluates the expression a + b and returns the result.

let sum = (a,b) => a + b;

console.log(sum(7,8));

//If we have only one argument, then parentheses around parameters can be omitted, making that even shorter.

let multiply = n => n * 5;
console.log(multiply(5));

//If you also check the typeof the variable, it will show as function.

console.log(typeof multiply);

//if there are no arguments, parentheses are empty, but they must be present.

let sayHi = () => console.log("Hello!");

sayHi()


//Multiline arrow functions

let sum2 = (a, b) => {
    let result = a + b;
    return result;
};
console.log(sum2(5,9));

//the curly brace opens multiline function
//if we use curly braces, the we need an explicit "return".















