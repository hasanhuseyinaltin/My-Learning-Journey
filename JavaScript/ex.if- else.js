var light = "green";

if(light == "green") {
    console.log("Drive")
} else if (light == "orange") {
    console.log("Get ready")
} else if (light == "red") {
    console.log("Dont' drive")
} else {
    //this block will run if no condition matches
    console.log("The car is not green, orange, or red");
}


//converting the previous if-else example with switch-case
switch(light) {
    case 'green':
        console.log("Drive");
        break;
    case 'orange':
        console.log("Get ready");
        break;
    case 'red':
        console.log("Don't drive");
        break;
    default:
        //this block will run if no condition matches
        console.log('The light is not green, orange, or red');
        break;
 }
// example1
 var age = 65;
if(age >= 65) {
    console.log("You get your income from your pension")
} else if (age < 65 && age >= 18) {
    console.log("Each month you get a salary")
} else if (age < 18) {
    console.log("You get an allowance")
} else {
    console.log("The value of the age variable is not numerical");
}

//example 2

var day = "Sunday"
switch(day) {
    case 'Monday':
     console.log("do sports")
     break;
    case 'Tuesday':
     console.log("make yoga")
     break;
    case 'Wednesday':
     console.log("work your subjects")
     break;
    case 'Thursday':
     console.log("Play chess")
     break;
    case 'Friday':
     console.log("Pray for God")
     break;
    case 'Saturday':
     console.log("Read a book")
     break;
    case 'Sunday':
     console.log("go swimming")
     break;
    default:
     console.log("There is no such day")  
     break;     
}

