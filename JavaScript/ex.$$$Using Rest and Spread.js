// Join arrays, objects using the rest operator

const fruits = ['apple', 'pear', 'plum']
const berries = ['blueberry', 'strawberry']
const fruitsAndBerries = [...fruits, ...berries] // concatenate
console.log(fruitsAndBerries); // [ 'apple', 'pear', 'plum', 'blueberry', 'strawberry' ]

// Joinning Objects

const flying = {wings:2};
const car = {wheels:4};
const flyingCar = { ...flying, ...car};

console.log(flyingCar); // { wings: 2, wheels: 4 }



//       Add new members to arrays without using the push() method

var sebzeler = ["soğan" , "domates", "marul"]
sebzeler = [...sebzeler, "salatalık", "patlıcan"]

console.log(sebzeler); // [ 'soğan', 'domates', 'marul', 'salatalık', 'patlıcan' ]


//     Convert a string to an array using the spread operator

const greeting = "Hello";
const arrayOfChars = [...greeting];
console.log(arrayOfChars); //  ['H', 'e', 'l', 'l', 'o']


//       Copy either an object or an array into a separate one

const car1 = {
    speed: 200,
    color: 'yellow'
}
const car2 = {...car1}
car1.speed = 201

console.log(car1.speed, car2.speed) //201 200


// You can copy an array into a completely separate array, also using the spread operator, like this:

const fruits1 = ['apples', 'pears']
const fruits2 = [...fruits]
fruits1.pop()
console.log(fruits1, "not", fruits2) // ['apples'] 'not' ['apples','pears']