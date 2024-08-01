//Nullish coalescing operator 
//The nullish coalescing operator is written as two question marks ??.

//As it treats null and undefined similarly, we’ll use a special term here, in this article. For brevity, we’ll say that a value is “defined” when it’s neither null nor undefined.

//In javascript, the following value are considered falsy: false, 0, "" (an empty string), null, undefined, and Nan.

//The result of a ?? b is:

//if a is defined, then a,
//if a isn’t defined, then b.

// let myVal = 0;
// // const myNumber = myVal || 10;
// const myNumber2 = myVal ?? 5;

// // console.log(myNumber);
// console.log(myNumber2);


// let firstName = null;
// let lastName = NaN;
// let nickName;

// console.log(firstName ?? lastName ?? nickName ?? "Vinay");



// let firstName = null;
// let lastName = NaN;
// let nickName = "admin";

// console.log(firstName || lastName || nickName || "Vinay")

//Another Example:-

// let age = 0;
// console.log(age || 18);
// console.log(age ?? 18);









