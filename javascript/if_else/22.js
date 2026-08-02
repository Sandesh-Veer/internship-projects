const prompt = require("prompt-sync")();

var ch = prompt("Enter a character: ");

switch (ch) {
    case "a":
    case "e":
    case "i":
    case "o":
    case "u":
    case "A":
    case "E":
    case "I":
    case "O":
    case "U":
        console.log("Vowel");
        break;

    default:
        console.log("Consonant");
}