function listArrayItems1(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(arr[i]) //display the array item where the index is euqal to i
    }
} 
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems1(colors); 
//display all items in the array at once

//function that takes an array as input and display all items of this array

function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i+1, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);

// my example

function listmyexample(arr) {
    for (var i = 0; i < arr.length; i++) {
        
        if(arr[i] == "red" ) {
            console.log((i+1), "tomato");
        }
        else if(arr[i] == "green") {
            console.log("apple");
        }
        else {
            console.log((i+1)*100, arr[i]);

        }
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];

listmyexample(colors);

// ex3

function letterFinder (word, match) {
    for (var i = 0 ; i < word.length; i++) {
        if(word[i] == match) {
            console.log('Found the', match, 'at', i)
        }
        else {
            console.log('---No match found at', i)
        }
    }
}
letterFinder ("test", "t");