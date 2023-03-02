// // Console Log
// console.log("Yo")

// // Alert
// // alert("annoying")

// // document.getElementById("demo").style.color = "crimson";
// let demo = document.getElementById("demo");

// demo.innerHTML = "La Vida es Una!";

// demo.style.color = "crimson"

// document.getElementsByClassName("total")

// let total = document.getElementsByClassName("total")

// total.style.color = "cyan"

// Write a fuction to greet
// // Fuction Decleration
// function greet() {
//     alert("Hello");
// }
// Calling Fuction (Turn on Washing Machine)
// greet();

// // Square a Number
// function square(number) {
//     return number * number;
// }

// // Save value in HTML
// let result = square(525);
// document.getElementById("demo").innerHTML = result;

// // Increase Winning Number by 5
// function increaseLargerNumber(x,y) {
//     // Save variable for result
//     let larger
//     if(x >= y) {
//         larger = x;
//     } else {
//         larger = y;
//     } 
//     // Return Larger Number by 5
//     return (larger + 5);
// }

// console.log(increaseLargerNumber(40,33));

// Make function show current date
function displayDate() {
    let demo = document.getElementById("demo");
    demo.innerHTML = Date();
}

// Save Button to variable
let btn = document.getElementById("btn");

btn.addEventListener("click", displayDate().style.color = "crimson");
