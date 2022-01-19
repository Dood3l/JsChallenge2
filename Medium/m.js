// MEDIUM: Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).

var input = Number(prompt("Pick a number 1-12"));

if (input == 1) {
    console.log("January")
} else if (input == 2) {
    console.log("February")
} else if (input == 3) {
    console.log("March")
} else if (input == 4) {
    console.log("April")
} else if (input == 5) {
    console.log("May")
} else if (input == 6) {
    console.log("June")
} else if (input == 7) {
    console.log("July")
} else if (input == 8) {
    console.log("August")
} else if (input == 9) {
    console.log("September")
} else if (input == 10) {
    console.log("October")
} else if (input == 11) {
    console.log("November")
} else if (input == 12) {
    console.log("December")
} else if(input > 12){
    alert("Invalid, number too high");
} else if(input < 1){
    alert("Invalid, number too low");
}