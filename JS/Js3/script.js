"use strict";

let num1, num2, operator;

function isNumber(x) {
    return (!x || isNaN(+x) || typeof x === "number");
}

do {
    num1 = prompt("Enter first number", num1);
    num2 = prompt("Enter second number", num2);
    operator = prompt("Enter math operator: +, -, *, /", operator);
} while (isNumber(num1) && isNumber(num2))

function calculator(num1, num2, operator) {
    let a = +num1;
    let b = +num2;
    switch (operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return a / b;
        default:
            return "Unknown operator";
    }
}

console.log(calculator(num1, num2, operator));
