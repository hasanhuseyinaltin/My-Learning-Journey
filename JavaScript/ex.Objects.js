//ex 

var arrOfKeys = ['speed', 'altitude', 'color'];
var drone = {
    speed: 100,
    altitude: 200,
    color: "red"
}
for (var i = 0; i < arrOfKeys.length; i++) {
    console.log(drone[arrOfKeys[i]])
}
/*Using the fact that brackets notation can evaluate expressions, I accessed the arrOfKeys[i] property on the drone object. 
This value changed on each loop while the for loop was running.

Specifically, the first time it ran, it was evaluated like this: 

The value of i was 0 

The value of arrOfKeys[i] was arrOfKeys[0], which was "speed" 

Thus, drone[arrOfKeys[i]] was evaluated to drone["speed"] which is equal to 100

This allowed me to loop over each of the values stored inside the drone object, based on each of its properties' keys. */

// ex22

var house2 = {};
house2["rooms"] = 4;
house2['color']= "pink";
house2["priceUSD"] = 12345;
console.log(house2); 
// {rooms: 4, color: 'pink', priceUSD: 12345}

//ex33

var car = {};
car.color = "red";
car["color"] = "green";
car["speed"] = 200;
car.speed = 100;
console.log(car); 
// {color: "green", speed: 100}


console.log(Math.PI);

/* Rounding Methods

These include: 

 Math.ceil() - rounds up to the closest integer - en yakın üst tamsayıya yuvarlar

 Math.floor() - rounds down to the closest integer - en yakın alt tam sayı

 Math.round() - rounds up to the closest integer if the decimal is .5 or above;
  otherwise, rounds down to the closest integer - .5 üzerinde üste altında alta yuvarlar 

 Math.trunc() - trims the decimal, leaving only the integer- ondalıklı kısmı siler tam sayı kalır.
*/


var decimal = Math.random() * 10;
 var rounded = Math.ceil(decimal);
 console.log(rounded);


//The concat() method joins two strings:  

  "Wo".concat("rl").concat("d"); // 'World',

/* Here's a list of all the methods covered in this cheat sheet:

charAt() 

concat() 

indexOf() 

lastIndexOf() 

split() 

toUpperCase() 

toLowerCase()  */

// Exercise: Creating arrays and objects
var clothes = [];
clothes.push("sock");
clothes.push("hat");
clothes.push("shirt");
clothes.push("neclace");
clothes.push("ring");
clothes.pop();
clothes.push("glasses");
console.log(clothes[2]);

var favCar = {}
favCar.color = "blue";
favCar.covertible = false;
console.log(favCar);


var car = {};
 car.mileage = 98765;
 car.color = "red";
 console.log(car);
 car.turnskey = function() {
    console.log("the engine is running");
 } 
 car.lightsOn = function() {
    console.log("the lights are on");
 }
 console.log(car);
 car.turnskey();
 car.lightsOn();