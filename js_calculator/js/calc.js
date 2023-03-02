// Test Js File
console.log("What's Good");

document.getElementById("answer");

// Save Result Element
let answer = document.getElementById("answer");

function Additive() {
    answer.innerHTML = 2 + 2;
}

// 2nd Result
document.getElementById("quotient");

let quotient = document.getElementById("quotient")

function Dividend() {
    quotient.innerHTML = 23 / 12;
}

// 3rd Result
document.getElementById("product");

let product = document.getElementById("product");

function Multiplicitive() {
    product.innerHTML = 27 * 147;
}

// 2nd Worst Calculator
function multiplyNumbers() {
    let firstNumber = document.getElementById("firstNumber");
    let secondNumber = document.getElementById("secondNumber");

    let solve = firstNumber.value * secondNumber.value;

    answer.innerHTML = solve;

}
