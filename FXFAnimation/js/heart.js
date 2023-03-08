let starter = document.getElementById("starter");

// Save rest of images in Array
let heartArray = ["assets/Asset20.png", "assets/Asset21.png", "assets/Asset22.png", "assets/Asset23.png", "assets/Asset24.png", "assets/Asset25.png", "assets/Asset26.png", "assets/Asset27.png"];

// Set a Counter Variable
let count = 0;

// Declare animation Function
function animate() {
    // Set starter Image
    starter.src = heartArray[count];
    // Increments
    count++;
    // Increase Count
    if(heartArray.length == count) {
        count = 0;
    }
}

setInterval(animate, 100)