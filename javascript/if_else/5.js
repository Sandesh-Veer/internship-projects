const prompt = require("prompt-sync")();

var marks = Number(prompt("Enter marks: "));

if (marks > 40) {
    console.log("Pass");
}