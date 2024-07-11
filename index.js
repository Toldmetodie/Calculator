let action;
let prevNumber;
let calculatorValue = document.getElementById("calculator-value");

console.log("hello")

calculatorValue.style.color = "red"

function onclickAdd() {
    action = "+";
    prevNumber = calculatorValue.innerText;
    calculatorValue.innerText = "0";
}

function onclickMultiply() {
    action = "*";
    prevNumber = calculatorValue.innerText;
    calculatorValue.innerText = "0";
}
function onclickSubtract() {
    action = "-";
    prevNumber = calculatorValue.innerText;
    calculatorValue.innerText = "0";
}
function onclickDivide() {
    action = "/";
    prevNumber = calculatorValue.innerText;
    calculatorValue.innerText = "0";
}


function calculate() {
    console.log(action)
    if (action === "+") {
        console.log('hello')
        calculatorValue.innerText = Number(prevNumber) + Number(calculatorValue.innerText);
    }
    if (action === "-") {
        calculatorValue.innerText = Number(prevNumber) - Number(calculatorValue.innerText);
    }
    if (action === "*") {
        calculatorValue.innerText = Number(prevNumber) * Number(calculatorValue.innerText);
    }
    if (action === "/") {
        calculatorValue.innerText = Number(prevNumber) / Number(calculatorValue.innerText);
    }
}

function onclickButtonOne() {
    calculatorValue.innerText = "1"
}
function onclickButtonTwo() {
    calculatorValue.innerText = "2"
}
function onclickButtonThree() {
    calculatorValue.innerText = "3"
}
function onclickButtonFour() {
    calculatorValue.innerText = "4"
}
function onclickButtonFive() {
    calculatorValue.innerText = "5"
}
function onclickButtonSix() {
    calculatorValue.innerText = "6"
}
function onclickButtonSeven() {
    calculatorValue.innerText = "7"
}
function onclickButtonEight() {
    calculatorValue.innerText = "8"
}
function onclickButtonNine() {
    calculatorValue.innerText = "9"
}
function onclickButtonZero() {
    calculatorValue.innerText = "0"
}
function onclickButtonEqual() {
    calculatorValue.innerText = "="
}
function onclickButtonAdd() {
    calculatorValue.innerText = "+"
}
function onclickButtonSubtract() {
    calculatorValue.innerText = "-"
}
function onclickButtonDivide() {
    calculatorValue.innerText = "÷"
}
function onclickButtonTimes() {
    calculatorValue.innerText = "×"
}