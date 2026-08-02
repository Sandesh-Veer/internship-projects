const prompt = require("prompt-sync")();

var ch = prompt("Enter a character: ");

if (ch == 'a' || ch == 'e' || ch == 'i' || ch == 'o' || ch == 'u' ||
    ch == 'A' || ch == 'E' || ch == 'I' || ch == 'O' || ch == 'U') {
    console.log("Vowel");
} else {
    console.log("Consonant");
}