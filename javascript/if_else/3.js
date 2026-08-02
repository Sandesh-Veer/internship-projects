const prompt = require("prompt-sync")();

let num = Number(prompt("Enter a number: "));

if (num % 5 === 0) {
    console.log("The number is divisible by 5");
} else {
    console.log("The number is not divisible by 5");
}