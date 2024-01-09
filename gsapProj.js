// GSAP animation for practise purpose only
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



// GSAP animation for moving images from left to right and revealing them one by one
// function createImageAnimation(index, xStart, xEnd, delay) {
//   // createImageAnimation() = used to animate each image in a sequence
//   const currentImage = `.imgContainer img:nth-child(${index})`;
//   const prevImage = `.imgContainer img:nth-child(${index - 1})`;

//   gsap.fromTo(
//     // gsap.fromTo() = used to create the animation
//     currentImage,
//     { x: xStart },
//     {
//       opacity: 1,
//       duration: 5,
//       delay,
//       x: xEnd,
//       onStart: function () {
//         gsap.to(prevImage, { opacity: 0, duration: 0 });

//         // onStart() callback = here when image reaches to "to" point or to the destination then we are making the visibility of prevImage as zero;
//         // onStart callback, is  hiding the previous image (prevImage) by setting its opacity to 0, whenm it reaches "to" point
//       },
//     }
//   );
// }

// gsap.to(".imgContainer", {      //gsap.to() = this animates the "imgContainer's  first image (first child)" 
//   x: "60%", // it moves the "imgContainer's first image (first child)" to the right
//   duration: 5,
//   onStart: function () {
//     // onStart() callback = here it shows the next image
//     gsap.to(".imgContainer img", { opacity: 0, duration: 0 }); // hides all the images
//     gsap.to(".imgContainer img:first-child", { opacity: 1, duration: 0.5 }); // shows the current image
//   },
//   onComplete: function () {
//     // onComplete() callback = here it resets position of "imgContainer" for the next cycle & starts animation for other images
//     gsap.to(".imgContainer", { x: "0%", duration: 0 });
//     gsap.to(".imgContainer img:first-child", { opacity: 0, duration: 0 }); // hides the first image as it was causing some issue

//     createImageAnimation(2, "-100%", "90%", 0.5);
//     createImageAnimation(3, "-200%", "-10%", 6);
//     createImageAnimation(4, "-300%", "-110%", 12);
//     createImageAnimation(5, "-400%", "-210%", 18);
//   },
// });



// GSAP animation for moving images in a sequence from right to left  
// const img1 = document.querySelector('.img1');
// const img2 = document.querySelector('.img2');
// const img3 = document.querySelector('.img3');
// const img4 = document.querySelector('.img4');
// const img5 = document.querySelector('.img5');

// const duration = 13;

// gsap.to(img1, {
//   x: '-400%', 
//   duration: duration,
//   ease: 'linear',
//   delay: 0,
// });

// gsap.to(img2, {
//   x: '-400%',
//   duration: duration,
//   ease: 'linear',
//   delay: 0,
// });

// gsap.to(img3, {
//   x: '-400%',
//   duration: duration,
//   ease: 'linear',
//   delay: 0,
// });

// gsap.to(img4, {
//   x: '-400%',
//   duration: duration,
//   ease: 'linear',
//   delay: 0,
// });

// gsap.to(img5, {
//   x: '-400%',
//   duration: duration,
//   ease: 'linear',
//   delay: 0,
// });



// GSAP animation for moving images in a sequence from left to right  
// const img1 = document.querySelector('.img1');
// const img2 = document.querySelector('.img2');
// const img3 = document.querySelector('.img3');
// const img4 = document.querySelector('.img4');
// const img5 = document.querySelector('.img5');

// gsap.fromTo(img5, { x: '-500%' }, { x: '0%', duration: 23, delay: 0})
// gsap.fromTo(img4, { x: '-500%' }, { x: '0%', duration: 23, delay: 0})
// gsap.fromTo(img3, { x: '-500%' }, { x: '0%', duration: 23, delay: 0})
// gsap.fromTo(img2, { x: '-500%' }, { x: '0%', duration: 23, delay: 0})
// gsap.fromTo(img1, { x: '-500%' }, { x: '0%', duration: 23, delay: 0})




// // GSAP animation for moving images in a sequence from left to right without any lagging
// const imagesList = document.querySelectorAll('.plpr_12rem');

// imagesList.forEach((item, index)=>{
//   gsap.fromTo(item, {x: '-500%'}, {x : '0%', duration: 23, delay: 0, ease: 'none'})
// })



// GSAP animation for moving images in a sequence from left to right without any lagging , with consistent & variable speed
const imagesList = document.querySelectorAll('.plpr_12rem');
const speedSlider = document.getElementById('speedSlider');
const speedValue = document.getElementById('speedValue');

let animationSpeed = 1; // Default animation speed

// Function to update animation speed based on the slider value
function updateAnimationSpeed() {
    animationSpeed = speedSlider.value;
    speedValue.textContent = animationSpeed;
}

// Event listener for the slider input
speedSlider.addEventListener('input', updateAnimationSpeed);

imagesList.forEach((item, index) => {
    gsap.fromTo(item, { x: '-500%' }, { x: '0%', duration: animationSpeed, delay: 0, ease: 'none' });
});

// Initial call to set up the default speed
updateAnimationSpeed();









