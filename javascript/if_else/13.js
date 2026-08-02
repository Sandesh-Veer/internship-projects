const prompt = require("prompt-sync")();

var num = Number(prompt("Enter a number: "));

if (num > 0) {
    console.log("Positive Number");
}
else if (num < 0) {
    console.log("Negative Number");
}
else {
    console.log("Zero");
}