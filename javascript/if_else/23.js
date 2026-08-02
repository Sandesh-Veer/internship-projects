const prompt = require("prompt-sync")();

console.log("MENU:");
console.log("1. Pizza");
console.log("2. Burger");
console.log("3. Pasta");
console.log("4. Sandwich");

var choice = Number(prompt("Enter your choice (1-4): "));

switch (choice) {
    case 1:
        console.log("You selected Pizza");
        break;

    case 2:
        console.log("You selected Burger");
        break;

    case 3:
        console.log("You selected Pasta");
        break;

    case 4:
        console.log("You selected Sandwich");
        break;

    default:
        console.log("Invalid choice");
}