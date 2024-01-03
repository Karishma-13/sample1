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
  // createImageAnimation() = used to animate each image in a sequence
  const currentImage = `.imgContainer img:nth-child(${index})`;
  const prevImage = `.imgContainer img:nth-child(${index - 1})`;

  gsap.fromTo(
    // gsap.fromTo() = used to create the animation
    currentImage,
    { x: xStart },
    {
      opacity: 1,
      duration: 5,
      delay,
      x: xEnd,
      onStart: function () {
        gsap.to(prevImage, { opacity: 0, duration: 0 });

        // onStart() callback = here when image reaches to "to" point or to the destination then we are making the visibility of prevImage as zero;
        // onStart callback, is  hiding the previous image (prevImage) by setting its opacity to 0, whenm it reaches "to" point
      },
    }
  );
}

gsap.to(".imgContainer", {      //gsap.to() = this animates the "imgContainer's  first image (first child)" 
  x: "60%", // it moves the "imgContainer's first image (first child)" to the right
  duration: 5,
  onStart: function () {
    // onStart() callback = here it shows the next image
    gsap.to(".imgContainer img", { opacity: 0, duration: 0 }); // hides all the images
    gsap.to(".imgContainer img:first-child", { opacity: 1, duration: 0.5 }); // shows the current image
  },
  onComplete: function () {
    // onComplete() callback = here it resets position of "imgContainer" for the next cycle & starts animation for other images
    gsap.to(".imgContainer", { x: "0%", duration: 0 });
    gsap.to(".imgContainer img:first-child", { opacity: 0, duration: 0 }); // hides the first image as it was causing some issue

    createImageAnimation(2, "-100%", "90%", 0.5);
    createImageAnimation(3, "-200%", "-10%", 6);
    createImageAnimation(4, "-300%", "-110%", 12);
    createImageAnimation(5, "-400%", "-210%", 18);
  },
});
