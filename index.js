//MENU
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");

if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

//REMOVE MENU

const navLink = document.querySelectorAll(".nav-link");

function linkAction() {
  const navMenu = document.getElementById("nav-menu");
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));


function scrollHeader() {
  const header = document.getElementById("header");
  if (this.scrollY >= 50) header.classList.add("scroll-header");
  else header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);



//CURSOR

function cursor() {
    let cursor = document.querySelector(".cursor");
    let body = document.querySelector("body");
  
    body.addEventListener("mousemove", (e) => {
      gsap.to(cursor, {
        x: e.x + "px",
        y: e.y + "px",
      });
    });
  }
  cursor();


  //LOADER

let intro = document.querySelector('.intro');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo');

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    logoSpan.forEach((span, idx) => {
      setTimeout(() => {
        span.classList.add('active')
      }, (idx + 1) * 500);
    });


    setTimeout(() => {
      logoSpan.forEach((span, idx) => {
        setTimeout(() => {
          span.classList.remove('active');
          span.classList.add('fade');
        }, (idx + 1) * 70)
      })
    }, 2000);
    setTimeout(() => {
      intro.style.top = '-100vh'
    }, 2300);
  })
});

//VANILLA JS

VanillaTilt.init(document.querySelectorAll(".parentbox"), {
  max: 25,
  speed: 400,
  glare: true,
  "max-glare": 1,
});

//SCROLLER

const scrollers = document.querySelectorAll('.scroller');

if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  addAnimation();
}
function addAnimation(){
  scrollers.forEach((scroller) => {
    scroller.setAttribute("data-animated", true);
  
  
    const scrollerInner = scroller.querySelector(".scroller-inner");
    const scrollerContent = Array.from(scrollerInner.children);
    
    scrollerContent.forEach(item => {
      const duplicatedItem = item.cloneNode(true);
      duplicatedItem.setAttribute('aria-hidden', true);
      scrollerInner.appendChild(duplicatedItem);
    });
  });
}

// SLIDES


let slides = document.querySelectorAll('.reviews .row1 .slides-container .slide');
let index = 0;

function next (){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev (){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

//SCROLLUP

function scrollUp(){
  const scrollUp = document.getElementById('scroll-up');
  if(this.scrollY >= 200) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

  //SCROLLS
// const sections = document.querySelectorAll('section[id]')

// function scrollActive(){
//   const scrollY = window.pageYOffset

//   sections.forEach(current => {
//     const sectionHeight = current.offsetHeight
//     const sectionTop = current.offsetTop - 50;
//     sectionId = current.getAttribute('id')

//     if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
//       document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
//     }else{
//       document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
//     }
//   })
// }
// window.addEventListener('scroll',scrollActive)

//ROLLING TEXT
let textElement =  document.querySelector('.text');
let textContent = textElement.textContent;
textElement.innerHTML = '';

for (let char of textContent){
  let span = document.createElement('span');
  span.textContent = char;
  textElement.appendChild(span);
}
let spans = textElement.querySelectorAll('span');
window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;
  spans.forEach((span, index) => {
    if(scrollDistance >= (index + 1) * 10){
      span.classList.add('active')
    }else{
      span.classList.remove('active')
    }
  })
})
//scrolls
let calcScrollValue = () => {
  let scrollProgress = document.getElementById("progress");
  let pos = document.documentElement.scrollTop;

  let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  let scrollValue = Math.round((pos * 100)/calcHeight);
   
  if(pos > 100){
      scrollProgress.style.display = "grid";
  }else{
      scrollProgress.style.display = "none";
  }

  scrollProgress.addEventListener("click",() => {
      document.documentElement.scrollTop = 0;
  });

  scrollProgress.style.background = `conic-gradient(#1d1d20 ${scrollValue}%, #b334e9 ${scrollValue}%)`;
};
window.onscroll = calcScrollValue;
window.onload = calcScrollValue;
// for typedJS