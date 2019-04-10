const slideCtn = document.querySelector('.slideshow-ctn');
const dotClick = document.createElement('div');
const proCtn = document.querySelector('.project-ctn');
const exerCtn = document.querySelector('.exercices-ctn');
const datos = {
  projects: [
    {
      name: 'Frogger Arcade Game',
      image: 'https://efectusmagnus.github.io/images/arcade-game.png',
      attribute: 'Frogger with lady-bug.',
      enlace: 'https://efectusmagnus.github.io/html/arcade-game.html',
      code: 'https://github.com/efectusmagnus/new-arcade-game',
      caption: 'Collect gems and water points!',
      type: 'OOP',
      description: 'Focused on object-oriented programming with "Vanilla" JavaScript, principally on classes and prototypes for creating a game on canvas.'
    },
    {
      name: 'Memory Game',
      image: 'https://efectusmagnus.github.io/images/brain-game.png',
      attribute: 'An icon of a brain.',
      enlace: 'https://efectusmagnus.github.io/html/memory-game.html',
      code: 'https://github.com/efectusmagnus/memory-game',
      caption: 'Have fun trainning your brain!',
      type: 'DOM',
      description: 'A browser-based card matching game.',
      aim: 'Besides handling user input and implementing gameplay logic, the focal point of the project was to manipulate the DOM, manage functions, arrays, objects, conditionals and loops.'
    },
    {
      name: 'Neighborhood Map',
      image: 'https://efectusmagnus.github.io/images/neighborhood-map.png',
      attribute: "An icon of a map's marker.",
      enlace: 'https://efectusmagnus-map.surge.sh/',
      code: 'https://github.com/efectusmagnus/neighborhood-map-udacity-p8',
      caption: "Museums in Paderborn!",
      type: 'REACT',
      description: "A single-page application writing with React.js featuring a map of Paderborn's museums.",
      aim: 'The aim of this project was to understand and use API Services, such as Google Maps APIs and Foursquare.'
    },
    {
      name: "Restaurant Reviews",
      image: 'https://efectusmagnus.github.io/images/tomate-pizza.png',
      attribute: "An icon of a map's marker.",
      enlace: 'https://efectusmagnus-reviews.surge.sh/',
      code: 'https://github.com/efectusmagnus/mws-restaurant-stage-1',
      caption: 'Find your cuisine in New York!',
      type: 'JS',
      description: 'A Progressive Web Application written in “Vanilla” JavaScript.',
      aim: 'The main emphasis was in creating and chaining promises, which included writing a Service Worker to cache assets for offline use.'
    },
    {
      name: "MyReads",
      image: 'https://efectusmagnus.github.io/images/books-reads.png',
      attribute: 'Books.',
      enlace: 'https://efectusmagnus-reads.surge.sh/',
      code: 'https://github.com/efectusmagnus/reactnd-project-myreads-starter',
      caption: 'Mark your books!',
      type: 'REACT',
      description: 'A React Application that utilizes React components in order to manage the user interface of a virtual bookcase, which stores and categorizes books.',
      aim: 'Focal points: to render UI with React and External Data, manage the State and the App Location with React Router.'
    }
  ],
  exercices: [
    {
      name: 'Pixel Art Maker',
      image: 'https://efectusmagnus.github.io/images/mario-pixeled.png',
      attribute: 'A picture of Mario in pixel form.',
      enlace: 'https://efectusmagnus.github.io/html/pixel-art-maker.html',
      code: 'https://codepen.io/Efectus-Magnus/pen/qxNeYz',
      caption: 'Your Imagination in Pixels!',
      type: 'jQUERY',
      description: 'A jQuerry application to draw with clicks.'
    },
    {
      name: "Town's News",
      image: 'https://efectusmagnus.github.io/images/town.png',
      attribute: 'A dalmatian.',
      enlace: 'https://efectusmagnus.github.io/html/towns-news.html',
      code: 'https://github.com/efectusmagnus/efectusmagnus.github.io',
      caption: 'All around art!',
      type: 'CSS',
      description: 'Mainly based on CSS. This website mimics a simple online newspaper.'
    },
    {
      name: "Animal's Card",
      image: 'https://efectusmagnus.github.io/images/dalmatian.png',
      attribute: 'A dalmatian.',
      enlace: 'https://efectusmagnus.github.io/html/animal-card.html',
      code: 'https://codepen.io/Efectus-Magnus/pen/WMXRaG',
      caption: 'A dark print!',
      type: 'HTML',
      description: 'An animal trading card. Mainly based on HTML and CSS to practice syntax, standard properties and values.'
    }
  ]
}
slideCtn.innerHTML = `${datos.projects.map(slideshow => `
  <div class="my-slides fade">
    <a href="${slideshow.enlace}">
      <img src="${slideshow.image}" alt="${slideshow.attribute}" style="width: 90%; max-width:400px">
      <div class="side-div">
        <h3 class="big-title">${slideshow.name}</h3>
        <p class="text">${slideshow.caption}</p>
      </div>
    </a>
  </div>
`).join('')}
  <div class="dot-ctn">
    ${Array(5).fill().map((item, i) => `
      <span class="dot" onclick="currentSlide(${i+1})" tabindex="0"></span>
    `).join('')}
  </div>
`
/* Container with featured projects */
proCtn.innerHTML = `${datos.projects.map(project => `
  <li class="project-list">
    <span class="badge">${project.type}</span>
    <a href="${project.enlace}">
      <img class="project-img" src="${project.image}" alt="${project.attribute}" style="max-width:311px">
    </a>
    <button class="tooltip" role="tooltip" aria-describedby="mytooltip">
      <h4 class="project-name" style="text-align: center">${project.name}</h4>
      <span id="mytooltip" role="tooltip" class="tooltiptext" aria-hidden="true">
        <p class="mini-description"><strong>Description: </strong>${project.description}
          ${project.aim ? `<br>${project.aim}` : ''}
        </p>
      </span>
    </button>
    <a href="${project.code}">
      <p class="project-link">Project Code</p>
    </a>
  </li>
`).join('')}`

/* Container with exercices of the challenge phase */
exerCtn.innerHTML = `${datos.exercices.map(exercice => `
  <li class="project-list">
      <span class="badge">${exercice.type}</span>
    <a href="${exercice.enlace}">
      <img class="project-img" src="${exercice.image}" alt="${exercice.attribute}" style="max-width:311px">
    </a>
    <button class="tooltip" role="tooltip" aria-describedby="mytooltip">
      <h4 class="project-name" style="text-align: center">${exercice.name}</h4>
      <span id="mytooltip" role="tooltip" class="tooltiptext" aria-hidden="true">
        <p class="mini-description"><strong>Description: </strong>${exercice.description}</p>
      </span>
    </button>
    <a href="${exercice.code}">
      <p class="project-link">Project Code</p>
    </a>
  </li>
`).join('')}`
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

// tooltip
/*if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
  const infoBtn = document.querySelectorAll('.tooltip');
  let b;

  for (b = 0; b < infoBtn.length; b++) {
    infoBtn[b].addEventListener("click", function() {

      //const infoText = this.nextElementSibling;
      const infoText = this.lastElementChild;
      if (infoText.style.visibility === "visible") {
        infoText.style.visibility = "hidden";
      } else {
        infoText.style.visibility = "visible";
      }
    });
  }
}*/

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
