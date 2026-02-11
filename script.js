// NAV HAMBURGER
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// HERO TYPEWRITER
const typewriter = document.getElementById('typewriter');
const words = ["Web Designer", "UI/UX Specialist", "Digital Creator"];
let wordIndex = 0;
let charIndex = 0;

function type() {
  if(charIndex <= words[wordIndex].length) {
    typewriter.innerText = words[wordIndex].substring(0, charIndex);
    charIndex++;
    setTimeout(type, 150);
  } else {
    setTimeout(erase, 1000);
  }
}

function erase() {
  if(charIndex >= 0) {
    typewriter.innerText = words[wordIndex].substring(0, charIndex);
    charIndex--;
    setTimeout(erase, 100);
  } else {
    wordIndex = (wordIndex + 1) % words.length;
    setTimeout(type, 200);
  }
}

document.addEventListener("DOMContentLoaded", type);

// SCROLL ANIMATION
const animatedItems = document.querySelectorAll('.animate');

function checkAnimation() {
  const triggerBottom = window.innerHeight * 0.85;
  animatedItems.forEach(item => {
    const itemTop = item.getBoundingClientRect().top;
    if(itemTop < triggerBottom) {
      item.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkAnimation);
window.addEventListener('load', checkAnimation);

// PORTFOLIO FILTER
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioCards = document.querySelectorAll('.portfolio-card');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    const filter = btn.dataset.filter;
    portfolioCards.forEach(card => {
      if(filter === 'all' || card.dataset.category === filter) {
        card.style.display = 'block';
      } else {
        card.style.display = 'none';
      }
    });
  });
});