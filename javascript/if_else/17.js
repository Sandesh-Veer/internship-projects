const prompt = require("prompt-sync")();

var m1 = Number(prompt("Enter marks of Subject 1: "));
var m2 = Number(prompt("Enter marks of Subject 2: "));
var m3 = Number(prompt("Enter marks of Subject 3: "));

if (m1 >= 35 && m2 >= 35 && m3 >= 35) {
    console.log("Student Passed All Subjects");
}
else {
    console.log("Student Failed");
}