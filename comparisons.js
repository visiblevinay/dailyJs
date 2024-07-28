//Comparisons
/*
Greater/less than: a > b, a < b.
Greater/less than or equals: a >= b, a <= b.
Equals: a == b,the double equality sign == means the equality test, while a single one a = b means an assignment.
Not equals: In maths the notation is ≠, but in JavaScript it’s written as a != b.
*/

//All comparison operators return a boolean value:


// let a = 5 > 2;
// console.log(a); //True

// let b = 2 == 1;
// console.log(b); // false

// let c = 2 != 1;
// console.log(c); // True

//String comparison 
// For string comparison javascript uses the so-called dictionary or lexicographical order.
//string are compared letter by letter.

// let a = "z" > "a";
// console.log(a); //True

// let fruits = "mango" > "apple";
// console.log(fruits); //true 

/*The algorithm to compare two strings is simple:

1. Compare the first character of both strings.
2. If the first character from the first string is greater (or less) than the other string’s, then the first string is greater (or less) than the second. We’re done.
3. Otherwise, if both strings’ first characters are the same, compare the second characters the same way.
4. Repeat until the end of either string.
5. If both strings end at the same length, then they are equal. Otherwise, the longer string is greater.
*/

//comparison of different types

// let a = "2" > 1;
// console.log(a); //true 

// let b = "01" == 1;
// console.log(b); //true 

//when comparing values of different types, javascript converts the value to numbers.

// for boolean values, true becomes 1 and false becomes 0.
//for example:
// let a = true == 1;
// console.log(a); //true

// let b = false == 0;
// console.log(b); //true


// let a = 2;
// let b = "2";
// console.log(a == b); //true,because double equality sing means
//the equality test.

// let a = "2";
// let b = 2;
// console.log(a === b); //false,A strict equality operator === checks the equality without type conversion,because its also checks datatypes .

//not equal

// let a = 3;
// let b = 3;
// console.log(a != b);

// let a = 3;
// let b = '3';
// console.log(a != b);

//strict equality operator

// let a = 3;
// let b = '3';
// console.log(a !== b);

//  let a = 2;
//  let b = '2';
//  console.log(a <= b)

// let a = null;
// let b;
// console.log(a == b);


let a = null;
let b;
console.log(a === b);














