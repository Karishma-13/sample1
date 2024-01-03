// gsap.to(
//     ".imgDiv",
//     {
//         x: 500,
//         duration : 5, //takes 5secs to show the animation 
//         delay: 2,
//         stagger: 4,  // it adds delay of 4secs in all 3 images used inside imgDiv class
//         repeat: -1,
//     }
// )


// GSAP animation for moving images and revealing them one by one
function createImageAnimation(index, xStart, xEnd, delay) {
  const currentImage = `.imgContainer img:nth-child(${index})`;
  const prevImage = `.imgContainer img:nth-child(${index - 1})`;

  gsap.fromTo(
    currentImage,
    { x: xStart },
    {
      opacity: 1,
      duration: 5,
      delay,
      x: xEnd,
      ease: "power1.inOut",
      onStart: function () {
        gsap.to(prevImage, { opacity: 0, duration: 0 });
      },
    }
  );
}

gsap.to(".imgContainer", {
  x: "60%", // Move the container to the right
  duration: 5,
  ease: "power1.inOut",
  onStart: function () {
    // Show the next image
    gsap.to(".imgContainer img", { opacity: 0, duration: 0 }); // Hide all images
    gsap.to(".imgContainer img:first-child", { opacity: 1, duration: 0.5 }); // Show the first image
  },
  onComplete: function () {
    // Reset position for the next cycle
    gsap.to(".imgContainer", { x: "0%", duration: 0 });

    createImageAnimation(2, "-100%", "90%", 0.5);
    createImageAnimation(3, "-200%", "-10%", 6);
    createImageAnimation(4, "-300%", "-110%", 12);
    createImageAnimation(5, "-400%", "-210%", 18);
  },
});










