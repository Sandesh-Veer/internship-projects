const prompt = require("prompt-sync")();

var num1 = Number(prompt("Enter first number: "));
var num2 = Number(prompt("Enter second number: "));

if (num1 > num2) {
    console.log("Largest number is " + num1);
} else {
    console.log("Largest number is " + num2);
}