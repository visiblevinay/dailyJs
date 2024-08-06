/*
The "switch" statement
A switch statement can replace multiple if checks.

It gives a more descriptive way to compare a value with multiple variants.
*/

//days seclect calendar

let day = 0;

switch (day) {
    case 0:
        console.log("Sunday")
        break;

        case 1:
        console.log("Monday")
        break;

        case 2:
        console.log("Tuesday")
        break;

        case 3:
        console.log("Wednesday")
        break;

        case 4:
        console.log("Thursday")
        break;

        case 5:
        console.log("Friday")
        break;

        case 6:
        console.log("Saturday")
        break;

    default:
        console.log("Enter the valid week day")
        break;
};


let age = 19;
switch(true){
    case(age >= 18 && age <= 30):
    console.log("Welcome")
    break;

    case(age <= 17 && age >= 8):
    console.log("Your are not welcome")
    break;

    default:
        console.log("enter valid age")

};

let math = 2+5;
switch(math){
    case 7:
        console.log("Right answer");
    break
    
    case 5:
        console.log("Wrong")
    break


}

let fruits = prompt("enter your favourite fruit name");

switch(fruits){
    case "mango": case "litchi":
        console.log("Also Mine Favourite")
        break;

    case "banana":
        console.log("Thats Healthy")
        break;
        
        default:
        console.log("Thats Good")
}







