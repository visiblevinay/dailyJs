/*Functions
Quite often we need to perform a similar action in many places of the script.

For example, we need to show a nice-looking message when a visitor logs in, logs out and maybe somewhere else.

Functions are the main “building blocks” of the program. They allow the code to be called many times without repetition.

We’ve already seen examples of built-in functions, like alert(message), prompt(message, default) and confirm(question). But we can create functions of our own as well.
*/

// function greet(){
//     console.log("hello")
// };

// greet()

//local variables
// function showMessage(){
//     let message = "hello world";
//     console.log(message);
// };

// showMessage();
// console.log(message);

//outer variables
// let userName = "Vinay"
// function greet2(){
//     let say = "Hello: " + userName;
//     console.log(say);
    
// }
// greet2()

// let secondName = "Raam";
// function showMessage(){
//     secondName = "Raam Kumar";
//     let message = "Hello: "  + secondName;
//     console.log(message);
// };
// console.log(secondName)
// showMessage()
// console.log(secondName);

//parameters
function showMessage(from, text){
    console.log(from+ " : " +text);
    
};
showMessage("vinay", "kumar");

//Returning a value
// A function can return a value back into the calling code as the result.


function sum(a ,b){
    return a + b;
};
let result = sum(2,2)
console.log(result);

let age = prompt("how old are you?", 18);
function checkage(age){
    if(age >= 18){
        return true;
    }else{
        return confirm("do you have permission?")
    }
};
if(checkage(age)){
    console.log("Access granted")
}else{
    console.log("Access denied");
    
};



// function showMovie(age) {
//     if ( !checkAge(age) ) {
//       return;
//     }
  
//     alert( "Showing you the movie" ); // (*)
//     // ...
//   }





