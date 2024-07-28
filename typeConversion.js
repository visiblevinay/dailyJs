/*Type Conversions =>

Most of the time, operators and functions automatically convert the values given to them to the right type.

For example, alert automatically converts any value to a string to show it. Mathematical operations convert values to numbers.

There are also cases when we need to explicitly convert a value to the expected type.*/


// let type = true;
// alert(typeof type);


// let type2 = 5;
// alert(typeof type2);


// let type3 = "Hello";
// alert(typeof type3);

//Automatic convertion

let autoConv = 5 + null;
console.log(autoConv); //=> 5
console.log(typeof autoConv); //=> number
//javascript automatic consider null as a zero


let autoConv2 = "5" + 2;
console.log(autoConv2); //=> 5null
console.log(typeof autoConv2); //=> string
//because + operator also use for concatenate.
//if we use other mathematical operators like -,*,/ then 
//javascript automatically converted 5 as a number not a
//string.

//for Example=>
     let autoConv3 = "8" * 5;
console.log(autoConv3);
console.log(typeof autoConv3);


// Type Conversion =>
    // 1. String()
    // 2. Number()
    // 3. Boolean()

    // num to str
    let numToStr = 4;
    console.log(typeof numToStr);
    let newNumToStr = String(numToStr);
    console.log(typeof newNumToStr);


    //str to num
    let strToNum = "15";
    console.log(typeof strToNum);
    let newStrToNum = Number(strToNum);
    console.log(newStrToNum);
    console.log(typeof newStrToNum);

    //boolean to num
    let boolean = true;
    console.log(typeof boolian);
    let booleanToNum = Number(boolean);
    console.log(booleanToNum);
    console.log(typeof booleanToNum);
    //when you use Boolean function on number 0 
    //then it converts as boolean and result will show as false.
    //same when you use boolean function on empty ("") string
    //result will show as false and when string have something
    //in it then its converted as false.



