// Variables
let navButton = document.getElementById("nav-button");
let arrow = document.getElementById("arrow");
let dropDown = document.getElementById("dropdown");
let page = document.getElementById("page");

// Reveal + Trigger Dropdown
function reveal() {
    dropDown.classList.toggle("reveal");
    arrow.classList.toggle("arrow-flip");
}

navButton.addEventListener("click", reveal);