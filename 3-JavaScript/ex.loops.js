// For loop

for (var i = 1; i<=4; i++) {
    console.log(i);
} console.log("GO");

for (var i = 10; i > 0; i--) {
    console.log(i);   
} console.log("Happy New Year!!");

for (var i = 2 ;i < 100; i=i*2) { 
     console.log(i);
}

// While Loop

var i = 1;
while (i < 4) {
    console.log(i);
    i=i+1
}
// example 1
console.log(2018)
console.log(2019)
console.log(2020)
console.log(2021)
console.log(2022)

var Year = 2018;
while(Year < 2023) {
    console.log(Year);
    Year=Year+1
}

//example 2



var i = 5;
while(i > 0) {
    console.log(i);
    i=i-1
} console.log("Countdown finished!")

//example 3


var i = 1;
while(i < 6 ) {
    console.log(i);
    i=i+1;
} console.log("Counting completed")


// Nested Loops

 for(var i = 2023; i <2025; i++) {
    console.log(i);
    for(var j = 6; j < 9; j++)
     console.log(".......",j);
}

    //nested loops - one inside another
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}

 for(var i = 100; i > 0; i = i - 10) {
    for(var j = 10; j > 4; j = j - 5) {
        console.log(i + " divided by " + j + " equals " + i / j );
    }
} 
 
for (var firstNum = 0; firstNum < 2; firstNum++) {
    for (var secondNum = 0; secondNum < 10; secondNum++) {
        console.log(firstNum + ", " + secondNum);
    }
}


// Working with conditionals and loops

for(var i = 1; i <= 10; i++) {
    if(i == 1) {
        console.log("Gold Medal");
    } else if(i == 2) {
        console.log("Silver Medal")
    } else if(i == 3) {
        console.log("Bronze Medal")        
    } else {
        console.log(i)
    }
}

for(var i = 1; i <=10; i++) {
    switch(i) {
        case 1:
         console.log("Gold Medal")
         break;
        case 2:
         console.log("Silver Medal")
         break;
        case 3:
         console.log("Bronze Medal")
         break;
        default :
         console.log(i)
         break;
    }
}

//                   FOR OF LOOPS

function testBracketsDynamicAccess() {
    var dynamicKey;
    if(Math.random() > 0.5) {
      dynamicKey = "speed";
     }else{
       dynamicKey = "color";
     }
  
      var drone = {
        speed: 15,
        color: "orange"
      }
  
      console.log(drone[dynamicKey]);
  }
  testBracketsDynamicAccess();