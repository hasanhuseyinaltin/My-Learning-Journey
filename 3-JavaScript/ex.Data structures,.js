/* What are template literals?

Template literals are an alternative way 
of working with strings, which was introduced
 in the ES6 addition to the JavaScript language.

Up until ES6, the only way to build strings
 in JavaScript was to delimit them in either
  single quotes or double quotes:*/

/*In this reading, the focus is on three specific methods that exist on arrays:

 forEach 

 filter

 map */

// The ForEach() Method 
const fruits = ['kiwi','mango','apple','pear'];
function appendIndex(fruit, index) {
    console.log(`${index}. ${fruit}`)
}
fruits.forEach(appendIndex);

// ex

const veggies = ['onion', 'garlic', 'potato'];
veggies.forEach( function(veggie, index) {
    console.log(`${index}. ${veggies}`);
});

// The Filter() Method

const nums = [0,10,20,30,40,50];
nums.filter( function(num) {
    return num > 20;
})

// THE MAP() METHOD
/*[0,10,20,30,40,50].Map( function(num) {
    return num / 10
})*/

//        Working with Objects in JavaScript

const result = [];
const drone = {
        speed: 100,
        color:"yellow"
}
const droneKeys = Object.keys(drone);
droneKeys.forEach(function(key) {
    result.push(key,drone[key])
})
console.log(result);

// USİNG MAP METHOD

new Map();
let bestBoxers = new Map();
bestBoxers.set(1,"The Champion");
bestBoxers.set(2,"The Runner-up");
bestBoxers.set(3,"The third place");

console.log(bestBoxers); /* Map(3) {
    1 => 'The Champion',
    2 => 'The Runner-up',
    3 => 'The third place'
  } */

bestBoxers.get(1);

//           WORKİNG WİTH SETS İN JS

new Set();
const repetitiveFruits = ['apple','pear','apple','pear','plum', 'apple'];
const uniqueFruits = new Set(repetitiveFruits);
console.log(uniqueFruits); // Set(3) { 'apple', 'pear', 'plum' }