let animatedMonster = document.getElementById("animated-monster");


let monster =
    bodymovin.loadAnimation({
          container: animatedMonster,
          renderer: 'svg',
          loop: false,
          autoplay: false,
          path: "https://lottie.host/877bed6b-8a82-46e8-be1b-478e2699262c/cfX0H6liPE.json"
        });

// Cry
animatedMonster.addEventListener("click", function() {
    monster.playSegments([30,70], true);
});


animatedMonster.addEventListener("mouseenter", function() {
    monster.playSegments([106,216], true);
});

animatedMonster.addEventListener("mouseleave", function() {
    monster.playSegments([249,290], true);
});