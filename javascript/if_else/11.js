const prompt = require("prompt-sync")();

var num1 = Number(prompt("Enter first number: "));
var num2 = Number(prompt("Enter second number: "));
var num3 = Number(prompt("Enter third number: "));

if (num1 > num2 && num1 > num3) {
    console.log("Largest number is " + num1);
} else if (num2 > num1 && num2 > num3) {
    console.log("Largest number is " + num2);
} else {
    console.log("Largest number is " + num3);
}