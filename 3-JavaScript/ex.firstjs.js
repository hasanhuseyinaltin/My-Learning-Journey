console.log('Hello World');

// This is a comment action (just one line)

/*/*this also allows me to 
comment anytime 
and anywhere with using 
multi line*/

"james";
var name;
name = "james";
var greet;
greet = "hello";
console.log(greet , name);
name = "john";
console.log(greet ,name);
greet = "merhaba";
console.log(greet , name);

/* "var" kullanrak değişken 
atadım. "name" bir "variable",
"james" ise "value". "var" 
kullanrak "name" i değişken 
atıyoruz sonra var kullanmadan
name değikenine tekrar değer 
girebiliyorum */


var petDog;
petDog = "Rex";
var petCat;
petCat = "Pepper";
console.log(petDog);
console.log(petCat);
console.log("My pet dog's name is:" , petDog);
console.log("My pet cat's name is:" , petCat);
var catSound; catSound = "purr";
var dogSound; dogSound = "woof";
console.log( petDog , "says" , dogSound);
console.log( petCat , "says" , catSound);
catSound = "meow";
console.log (petCat, "now says", catSound);

/* Arithmetic operators in JS:
    +  addition
    -  substraction
    *  multiplication
    /  division
*/

/*  Comparison operators in JS:
    > greater than
    < lesser than
    == equal 
*/

console.log(55+32);
console.log(77/11);
console.log(32/3*5-2+11);
console.log(34+(5*31)/77-42);


//The logical OR operator in JavaScript:||  
console.log(true || true); "true"
console.log(true || false); "true"
console.log(false || true); "true"
console.log(false || false); "false"

//The logical AND operator in JavaScript: && 

console.log(true && true);  "true" 
console.log(true && false); "false"
console.log(false && true); "false"
console.log(false && false); "false"

//The logical NOT operator: ! 

var petHungry = true;

console.log('Feeding the pet');
console.log("Pet is hungry: ", !petHungry);
console.log(petHungry);

var petHungry = true;
petHungry = !petHungry;
console.log(petHungry);

/* The modulus operator: % 
(bölme işlmei sonrası kalanı veriyor) */

console.log(22 % 5); "2"

//The equality operator, ==  //

console.log(15==15); "true"
console.log(22==10); "false"
console.log(15=="15"); "true"

/* The strict equality operator, === :
The strict equality operator compares 
for both the values and the data types. */

console.log(5===5); "true"
console.log(7==="7"); "false"

/* The inequality operator, !=
The inequality operator checks if two values are not the same, but it does not check against the difference in types.

For example, 5 != "5" returns false, because it's false to claim that the number 5 is not equal to number 5, even though this other number is of the string data type.

The strict inequality operator !==
For the strict inequality operator to return false, the compared values have to have the same value and the same data type. 

For example,  5 !== 5 returns false because it is false to say that the number 5 is not of the same value and data type and another number 5.

However, comparing the number 5 and the string 5, using the strict inequality operator, returns true. */


/*Combining two strings using the + operator

"inter" + "net" // "internet"
"note" + "book" // "notebook" */

console.log(365 + " days"); 
console.log(12 + " months");

// örnek 

var num1 = 2;
var num2 = 5;
var test1 = num1 % 2;
var test2 = num2 % 2;
var result1 = test1 == 0;
var result2 = test2 == 0;
console.log("Is " , num1 ,"an even number?", result1);
console.log("Is", num2, "an even number?", result2);




//                  JSON TO JAVASCRIPT  &  JAVASCRIPT TO JSON

'{"greeting":"hello"}';
const jsonStr = '{"greeting":"hello"}';
console.log(JSON.parse(jsonStr)); //{ greeting: 'hello' }

const aPlanObj = JSON.parse(jsonStr);
aPlanObj.greeting = "hi";
console.log(aPlanObj); // { greeting: 'hi' }

const data = {
    firstname:"John",
    lastname:"Doe",
    greeting:"hello",
}
JSON.stringify(data);
console.log(data); //{ firstname: 'John', lastname: 'Doe', greeting: 'hello' }











