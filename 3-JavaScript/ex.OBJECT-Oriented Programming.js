var virtualPet = {
    sleepy: true,
    nap: function() {
        this.sleepy = false
    }
}
console.log(virtualPet.sleepy);
virtualPet.nap();
console.log(virtualPet.sleepy);

//OOP 1 

var purchase1 = {
    shoes:100,
    stateTax:1.2,
    totalPrice:function() {
        var calculation = purchase1.shoes * purchase1.stateTax;
        console.log("Total price:", calculation );
    }
}
// purchase1.totalPrice();

//OOP 2
var purchase2 = {
    shoes:50,
    stateTax:1.2,
    totalPrice:function() {
        var calculation = purchase2.shoes * purchase2.stateTax;
        console.log("Total price:", calculation );
    }
}
// purchase2.totalPrice();

// Using "this" for OOP

var purchase1 = {
    shoes:100,
    stateTax:1.2,
    totalPrice:function() {
        var calculation = this.shoes * this.stateTax;
        console.log("Total price:", calculation );
    }
}
purchase1.totalPrice();

var purchase2 = {
    shoes:50,
    stateTax:1.2,
    totalPrice:function() {
        var calculation = this.shoes * this.stateTax;
        console.log("Total price:", calculation );
    }
}
purchase2.totalPrice();

// class

class Car {
    constructor(color,speed) {
        this.color = color;
        this.speed = speed;
    }
    turboOn() {
        console.log("turbo is on!");
    }
}

var car1 = new Car("red",100)
console.log(car1);

//  OOP Principles 1 : Inheritance

class Animal { /* ...class code here... */ }
class Dog extends Animal { /* ...class code here... */ }
class wardog extends Dog { /* ...class code here... */ }

// OOP Principles 2: Encapsulation

/*In the simplest terms,
 encapsulation has to do with making a code implementation 
 "hidden" from other users, in the sense that 
 they don't have to know how my code works 
 in order to "consume" the code.*/


// OOP Principles 3: Abstraction

 /* An abstraction is about extracting the concept of
  what you're trying to do, rather than dealing with 
  a specific manifestation of that concept. 

 *Encapsulation is about you not having access to,
 or not being concerned with, how some implementation
  works internally. */

// OOP Principles 4: Polymorphism

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"

// CLASS EX

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.

// NEW CLASS EXAMPLE

class StationaryBike {
    constructor(position, gears) {
        this.position = position
        this.gears = gears
    }
}

class Treadmill {
    constructor(position, modes) {
        this.position = position
        this.modes = modes
    }
}

class Gym {
    constructor(openHrs, stationaryBikePos, treadmillPos) {
        this.openHrs = openHrs
        this.stationaryBike = new StationaryBike(stationaryBikePos, 8)
        this.treadmill = new Treadmill(treadmillPos, 5)
    }
}

var boxingGym = new Gym("7-22", "right corner", "left corner")

console.log(boxingGym.openHrs) //
console.log(boxingGym.stationaryBike) //
console.log(boxingGym.treadmill) //

// WİTHOUT DEFOULT PARAMETERS

class NoDefaultParams {
    constructor(num1, num2, num3, string1, bool1) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}

var fail = new NoDefaultParams(1,2,3,false);
fail.calculate(); // 'The value of bool1 is incorrect'

// WİTH DEFAULT PARAMETERS

class WithDefaultParams {
    constructor(num1 = 1, num2 = 2, num3 = 3, string1 = "Result:", bool1 = true) {
        this.num1 = num1;
        this.num2 = num2;
        this.num3 = num3;
        this.string1 = string1;
        this.bool1 = bool1;
    }
    calculate() {
        if(this.bool1) {
            console.log(this.string1, this.num1 + this.num2 + this.num3);
            return;
        }
        return "The value of bool1 is incorrect"
    }
}
var better = new WithDefaultParams();
better.calculate(); // Result: 6