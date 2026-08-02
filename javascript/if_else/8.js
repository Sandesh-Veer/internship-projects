const prompt = require("prompt-sync")();

var num = Number(prompt("Enter a number: "));

if (num >= 0) {
    console.log("Positive Number");
} else {
    console.log("Negative Number");
}