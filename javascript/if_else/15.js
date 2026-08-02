const prompt = require("prompt-sync")();

var u = "admin";
var p = "1234";

var un = prompt("Enter username: ");
var pw = prompt("Enter password: ");

if (un == u && pw == p) {
    console.log("Login Successful");
}
else {
    console.log("Login Failed");
}