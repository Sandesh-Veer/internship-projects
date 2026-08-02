const prompt = require("prompt-sync")();

var age = Number(prompt("Enter age: "));

if (age >= 0 && age <= 12) {
    console.log("Child");
}
else if (age >= 13 && age <= 19) {
    console.log("Teen");
}
else if (age >= 20 && age <= 59) {
    console.log("Adult");
}
else {
    console.log("Senior Citizen");
}
