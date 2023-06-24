const display = document.querySelector("#display");
const numbers = document.querySelectorAll(".number");
const functions = document.querySelectorAll("#functions button");
const equal = document.querySelector("#equ");
const clear = document.querySelector("#clear");

let displayValue = 0;
let functionSwitch = 0;
let InputSwitch = 0;

numbers.forEach((number, index) => {
    number.addEventListener("click", function() {
        fillDisplay(index);
        InputSwitch = 1;
    })
})

functions.forEach(fnction => {
    fnction.addEventListener("click", function() {
        if (InputSwitch === 0) {
            operator = fnction.getAttribute("id");
            return;
        }
        if (functionSwitch === 0) {
            firstNumber = displayValue;
            displayValue = 0;
            operator = fnction.getAttribute("id");
            functionSwitch = 1;
            InputSwitch = 0;            
        }
        else {
            secondNumber = displayValue;
            displayValue = operate(firstNumber, operator, secondNumber);
            display.innerText = round(displayValue);
            operator = fnction.getAttribute("id");
            
            firstNumber = displayValue;
            displayValue = 0;
            functionSwitch = 1;
            InputSwitch = 0;           
        }

    })
})

equal.addEventListener("click", function() {
    if (functionSwitch === 0) return;

    secondNumber = displayValue;

    if (operator === "div" && secondNumber === 0) {
        displayValue = "KEKW CR4$H3D";
        display.innerText = displayValue;
        firstNumber = 0;
        displayValue = 0;
        functionSwitch = 0;
        InputSwitch = 0;
        return;  
    }
    else { 
        displayValue = operate(firstNumber, operator, secondNumber);

        display.innerText = round(displayValue);
        firstNumber = displayValue;    
    }


    // Function copypasta

    displayValue = 0;
    functionSwitch = 1;
    InputSwitch = 0;   
})

clear.addEventListener("click", function() {
    displayValue = 0;
    firstNumber = 0;
    operator = 0;
    secondNumber = 0;
    functionSwitch = 0;
    InputSwitch = 0;
    display.innerText = displayValue;
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

function round(displayValue) {
    if (displayValue.toString().length >= 12) {
        return displayValue.toPrecision(12);
    }
    else return displayValue;
}

function operate(a, operator, b) {
    if (InputSwitch === 0 && functionSwitch === 0) return displayValue;
    if (operator === "add") return add(a, b);
    if (operator === "sub") return sub(a, b);
    if (operator === "mul") return mul(a, b);
    if (operator === "div") return div(a, b);
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