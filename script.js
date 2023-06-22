const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");

let displayValue = 0;

numbers.forEach((number, index) => {
    number.addEventListener("click", function(e) {
        fillDisplay(index);
    })
})

let firstNumber;
let operator;
let secondNumber;

function fillDisplay(buttonIndex) {
    if (displayValue === 0) {
        // Button #1 - #9
        if (buttonIndex !== 9) display.innerText = buttonIndex + 1;
        // Last button #0
        else display.innerText = 0;

        displayValue = parseInt(display.innerText);
    }
    else {
        // Button #1 - #9
        if (buttonIndex !== 9) display.innerText = displayValue * 10 + buttonIndex + 1;
        // Last button #0
        else display.innerText = displayValue * 10;

        displayValue = parseInt(display.innerText);
    }
}

function operate(a, operator, b) {
    if (operator === "+") return add(a, b);
    if (operator === "-") return sub(a, b);
    if (operator === "*") return mul(a, b);
    if (operator === "/") return div(a, b);
}

function add(a, b) {
    return a + b;
}

function sub(a, b) {
    return a - b;
}

function mul(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}