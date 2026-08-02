const prompt = require("prompt-sync")();

var num = Number(prompt("Enter a number: "));

if (num % 2 == 0) {
    console.log("Even Number");
} else {
    console.log("Odd Number");
}