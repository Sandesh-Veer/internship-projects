const prompt = require("prompt-sync")();

var a = Number(prompt("Enter first number: "));
var b = Number(prompt("Enter second number: "));
var op = prompt("Enter operator (+, -, *, /): ");

switch (op) {
    case "+":
        console.log("Result:", a + b);
        break;

    case "-":
        console.log("Result:", a - b);
        break;

    case "*":
        console.log("Result:", a * b);
        break;

    case "/":
        if (b != 0) {
            console.log("Result:", a / b);
        } else {
            console.log("Cannot divide by zero");
        }
        break;

    default:
        console.log("Invalid choice");
}