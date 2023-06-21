let firstNumber;
let operator;
let secondNumber;

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