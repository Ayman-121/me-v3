let curs = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {
  let x = e.pageX;
  let y = e.pageY;
  curs.style.left = x - 15 + "px";
  curs.style.top = y - 15 + "px";
});

let menuEls = document.querySelectorAll(".nav-title a, #logo-codepen");
menuEls.forEach((el) => {
  el.addEventListener("mouseenter", () => {
    setTimeout(() => {
      curs.classList.add("cursor-fade");
    }, 300);
  });

  el.addEventListener("mouseleave", () => {
    curs.classList.remove("cursor-fade");
  });
});

/***********************************
Timer
************************************/

/***********************************
Annime.js filter SVG
************************************/
/*
var timeline = anime.timeline({
  duration: 1200,
  easing: 'linear',
  autoplay: true,
  loop:true,
  direction:'alternate',
  easing:'easeInOutQuad'
});

timeline.add({
  targets: ['feTurbulence', 'feMorphology'],
  // baseFrequency: ['0.014 0.014', '0.023 0.023'],
  radius: [14, 8, 20, 8, 14]
  // seed: [4, 8, 20, 8, 4]
});
*/

/***********************************
Switch CSS Colors
************************************/

const toggleThemeBtn = document.querySelector('#toggle-theme');

toggleThemeBtn.addEventListener('click', function () {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'grey' : currentTheme === 'grey' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', newTheme);
});



/***********************************
Switch Fullscreen
************************************/

function toggleFullscreen(elem) {
  elem = elem || document.documentElement;
  if (!document.fullscreenElement && !document.mozFullScreenElement &&
    !document.webkitFullscreenElement && !document.msFullscreenElement) {
    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    } else if (elem.mozRequestFullScreen) {
      elem.mozRequestFullScreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
    }
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    }
  }
}
document.getElementById('fullscreen-mode').addEventListener('click', function () {
  toggleFullscreen();
});


/***********************************
Activity
************************************/

// var timeoutID;

// function setup() {
//   this.addEventListener("mousemove", resetTimer, false);
//   this.addEventListener("mousedown", resetTimer, false);
//   this.addEventListener("keypress", resetTimer, false);
//   this.addEventListener("DOMMouseScroll", resetTimer, false);
//   this.addEventListener("mousewheel", resetTimer, false);
//   this.addEventListener("touchmove", resetTimer, false);
//   this.addEventListener("MSPointerMove", resetTimer, false);

//   startTimer();
// }
// setup();

// function startTimer() {
//   timeoutID = window.setTimeout(goInactive, 12000);
// }

// function resetTimer(e) {
//   window.clearTimeout(timeoutID);

//   goActive();
// }

// function goInactive() {
//   gsap.to(".activity", {
//     duration: 5,
//     autoAlpha: 1,
//     ease: "power4.out(2)",
//     delay: 0
//   });
// }

// function goActive() {
//   gsap.to(".activity", {
//     duration: 0,
//     autoAlpha: 0,
//     ease: "power4.out(2)",
//     delay: 0
//   });
//   startTimer();
// }