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
// let coffeeImage = document.getElementById("coffeeImage");
// coffeeImage.onclick = openLightbox;
// let cornImage = document.getElementById("cornImage");
// cornImage.onclick = openLightbox;
// let columbianImage = document.getElementById("columbianImage");
// columbianImage.onclick = openLightbox;
// let sunsetImage = document.getElementById("sunsetImage");
// sunsetImage.onclick = openLightbox;
let = galleryImages = document.getElementsByClassName("galleryImage");

// Looping (Open)
 for (let i = 0; i < galleryImages.length; i++) {
    let galleryImage = galleryImages[i];
    galleryImage.onclick = openLightbox;
 }


// Closing Lightbox + Trigger
function closeLightbox() {
    lightboxContainer.classList.remove("display");
    lightbox.src = "";
}

// Looping (Close)
let closers = document.getElementsByClassName('closer');
for (let i = 0; i < closers.length; i++) {
    let closer = closers[i];
    closer.onclick = closeLightbox;
}

lightboxBackground.onclick = closeLightbox;
lightboxCloser.onclick = closeLightbox;