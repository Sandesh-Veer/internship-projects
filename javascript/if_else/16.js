const prompt = require("prompt-sync")();

var n = Number(prompt("Enter a number: "));

if (n > 0 && n % 2 == 0) {
    console.log("Number is Positive and Even");
}
else {
    console.log("Number is Not Positive and Even");
}