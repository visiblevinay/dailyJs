// “unary”, “binary”, “operand”

/*An operand – is what operators are applied to. For instance, in the multiplication of 5 * 2 there are two operands: the left operand is 5 and the right operand is 2. Sometimes, people call these “arguments” instead of “operands”.

An operator is unary if it has a single operand. For example, the unary negation - reverses the sign of a number:

An operator is binary if it has two operands. The same minus exists in binary form as well:
*/

let x = 1;

x = -x;
console.log(x); //-1, unary negation was applied.

let X = 1, Y = 3;
console.log(Y-X);  // 2, binary minus subtracts values


//Addition 

// let a = 8;
// let b = 12;
// console.log(a+b);


//Subtraction

// let c = 50;
// let d = 20;
// console.log(c-d);


//Multiplication

let e = 5;
let f = 5;
console.log(e*f);

//Division
 
let g = 50;
let h = 5;
console.log(g/h);


//Modulus or Remainder
//The result of a % b is the remainder of the integer division of i by j.

let i = 5;
let j = 2;
console.log(i%j);

//Exponentiation

let k = 2;
let l = 2;
console.log(k ** l)

//The exponentiation operator k ** l raises k to the power of l.


//Numeric conversion, unary +

let A = 5;
console.log(+A); //1, no effect on numbers

let B = true;
console.log(+true)
console.log(+"")
// Converts non-numbers

//Assignment
/* an assignment = is also an operator. It is listed in the precedence table with the very low priority of 2.

That’s why, when we assign a variable, like num = 2 * 4 + 2, the calculations are done first and then the = is evaluated, storing the result in num.*/

let num = 2 * 4 + 2;
console.log(num);

//Chaining assignments

// let a, b, c;
// a = b = c = 2 + 2;
// console.log(a);
// console.log(c);


//Increment and decrement 

// let a = 10;
// let b = 5;
// a++;
// console.log(a + b);
// b--;
// console.log(a + b);

