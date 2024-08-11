//Object
/*
in data types, there are eight data types in javascript.
seven of them are called "primitive",because their value contain only a single thing(be it a string or a number or whatever).

but objects are usedd to stored keyed collections of various data and more complex entities.

An object can be created with curly brackets with an optional list of properties. A property is a "key: value" pair, wher key is a string(also called a "property name"), and value can be anything.

we can imagine an object as a cabinet with signed files.Every piece of data is stored in its file by the key. its easy to find a file by its name or add/remove a file.
*/



let uniqueId = Symbol("id");


let user = {
    name: "Admin",
    "full name": "john cena",
    age: 26,
    gender: "male",
    isAvailable: false,
    [uniqueId]: Math.random()
};
console.log(user);


//u can acces object key with dot(.) notation
console.log(user.gender);

//but u can also access key wit square bracet[] notation, square bracet notation is more usefull than dot notation because the you added some new key:value in object with quotes and with space then dot notation can not find the key value. 

console.log(user["isAvailable"]);

//if we want to add symbol as a object key,
//then first we have to defined a symbol
//and we have to put symbol in object with key name in square bracket.
//for access symbol we can use square bracket notation but without any quotes, for example:-

console.log(user[uniqueId]);

//change value
//we just asign new value with equal sign to rewrite new value

user.name = "Vinay";
console.log(user["name"]);

//we can also freeze the object,so it can not accept the changes:-
// Object.freeze(user);

// user.name = "admin";
// console.log(user)

//we can also add functions in object

user.greeting = function() {
    console.log("Hello New User")
}

console.log(user.greeting());

//we can also use function on indivisual object keys
//if we want to refer same object then we can use this.(dot)

user.greetingTwo = function() {
    console.log(`Hello New User ${this.name}`);
}
console.log(user.greetingTwo());

//To remove a property, we can use the delete operator:

delete user.age;

console.log(user)

// The value can be of any type. Let’s add a age again:
user.age = 26;

console.log(user);