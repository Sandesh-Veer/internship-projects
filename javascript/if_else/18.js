const prompt = require("prompt-sync")();

var age = Number(prompt("Enter age: "));
var test = prompt("Did you pass the driving test? (yes/no): ");

if (age >= 18 && test == "yes") {
    console.log("Eligible for Driving License");
}
else {
    console.log("Not Eligible for Driving License");
}