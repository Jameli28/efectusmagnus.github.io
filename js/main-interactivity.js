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
function popupInfo() {
  const popup = document.querySelector('.popuptext');
  popup.classList.toggle('show');
}
/*window.onclick = function(event) {
  const popup = document.querySelector('.popuptext');
  if (event.target === popup) {
    popup.style.display = 'none';
  }
}*/
