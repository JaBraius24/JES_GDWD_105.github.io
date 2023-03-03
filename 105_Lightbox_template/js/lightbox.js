// Test Java
console.log("Yoo!")

// Trigger Lightbox
let lightboxContainer = document.getElementById("lightboxContainer");
let lightboxBackground = document.getElementById("lightboxBackground");
let lightbox = document.getElementById("lightbox");
let lightboxCloser = document.getElementById("lightboxCloser");

// Make Lightbox Appear
function openLightbox() {
    lightboxContainer.classList.add("display");
    lightbox.src = this.src;
}

// Reference Images & Opening Lightbox
let coffeeImage = document.getElementById("coffeeImage");
coffeeImage.onclick = openLightbox;

// Closing Lightbox + Trigger
function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;