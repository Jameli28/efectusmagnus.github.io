/*-- Slideshow --*/
/*-- Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow_auto --*/
/*-- Source: https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_slideshow --*/
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  const slides = document.getElementsByClassName("my-slides");
  const dots = document.getElementsByClassName("dot");
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  // Change image every 3 seconds
  setTimeout(showSlides, 3000);
}

showOnClick(slideIndex);

function currentSlide(n) {
  showOnClick(slideIndex = n);
}
// Click on a dot to change the select a slideshow
function showOnClick(n) {
  let i;
  const slides = document.getElementsByClassName("my-slides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "")
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
// Adapted from:
// https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm
// Slideshow touch events
//slideCtn.addEventListener("touchstart", startTouch, false);
slideCtn.addEventListener("touchstart", startTouch, {passive: true});
//slideCtn.addEventListener("touchmove", moveTouch, false);
slideCtn.addEventListener("touchmove", moveTouch, {passive: true});

// Swipe Up/Down/Left/Right
let initialX = null;
let initialY = null;

function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
}

function moveTouch(e) {
  if (initialX === null) {
    return;
  }
  if (initialY === null) {
    return;
  }
  let currentX = e.touches[0].clientX;
  let currentY = e.touches[0].clientY;
  let diffX = initialX - currentX;
  let diffY = initialY - currentY;
  if (Math.abs(diffX) > Math.abs(diffY)) {
    // sliding horizontally
    if (diffX > 0) {
      //swipped left
      moveSlide(1);
    } else {
      //swipped right
      moveSlide(-1);
    }
  } else {
    // sliding vertically
    if (diffY > 0) {
      //swipped up
      //console.log("swipped up");
      return;
    } else {
      // swipped down
      return;
      //console.log("swipped down");
    }
  }
  initialX = null;
  initialY = null;
  e.preventDefault();
}

function moveSlide(n) {
  showOnTouch(slideIndex += n);
}
// Called after a touch event
function showOnTouch(n) {
  let i;
  const slides = document.getElementsByClassName("my-slides");
  const dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (let i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  const infoBtn = document.querySelectorAll('.tooltip');
  let b;

  for (b = 0; b < infoBtn.length; b++) {
    infoBtn[b].addEventListener("click", function() {

      //const infoText = this.nextElementSibling;
      const infoText = this.lastElementChild;
      if (infoText.style.display === "block") {
        infoText.style.display = "none";
      } else {
        infoText.style.display = "block";
      }
    });
  }
}

function showHide() {
  var x = document.getElementById("text-box");
  if (x.style.display === "none") { //if the text is hidden,
    x.style.display = "block"; //then, show text
  } else {
    x.style.display = "none"; //else, hide it.
  }
}
