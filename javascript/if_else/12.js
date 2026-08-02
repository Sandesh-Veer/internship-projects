const prompt = require("prompt-sync")();

var marks = Number(prompt("Enter marks: "));

if (marks >= 90) {
    console.log("Grade A");
}
else if (marks >= 75) {
    console.log("Grade B");
}
else if (marks >= 60) {
    console.log("Grade C");
}
else if (marks >= 40) {
    console.log("Grade D");
}
else {
    console.log("Fail");
}