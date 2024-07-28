/*
The conditional operator is represented by a question mark ?. Sometimes it’s called “ternary”, because the operator has three operands. It is actually the one and only operator in JavaScript which has that many.
*/

let a = 200;
let b;
(a == 100)? b = "true" : b = "false";
console.log(b);

//lets make more shorter =>

    let age = 28;
    result = age >= 18? "You are eligible" : "You are not eligible";
    console.log(result);

    //Technically, we can omit the parentheses around age >= 18. The question mark operator has a low precedence, so it executes after the comparison.