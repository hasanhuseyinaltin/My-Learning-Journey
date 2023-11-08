// example
var currencyone = 100;
var currencytwo = 0;
var exchangerate = 1.2;

function covertCurrency(amount,rate) {
    return amount * rate;
}

currencytwo = covertCurrency(currencyone,exchangerate);
console.log(currencytwo);

// example 2 ( recursive -tekrarlı- functions)

var counter = 3;

function example() {
    console.log(counter);
    counter = counter - 1;
    if (counter === 0) return;
    //example();
}
example();

// örnek 3

function getTotal(a,b) {
    return a + b
}
var num1 = 2;
var num2 = 3;

var total = getTotal(num1, num2);

// örnek 4

function getDistance(mph, h) {
    return mph * h
}
var mph = 60;
var h = 2;
var distance = getDistance(mph, h);

console.log(distance); // <====== THIS HERE!

// First-Class Functions

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber())

/* Higher-order Functions

A higher-order function is a function
that has either one or both of the following characteristics:
It accepts other functions as arguments
It returns functions when invoked */

/* function addTwoNums(getNumber1, getNumber2) {
    console.log(getNumber1() + getNumber2());
}
addTwoNums(specificNum, specificNum); // returned number is 84
addTwoNums(specificNum, randomNum); // returned number is 42 + some random number
*/
