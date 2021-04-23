const burger = document.querySelector('.burger');
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.nav');


burger.addEventListener('click', () => {
  nav.classList.toggle('open')
  burger.classList.toggle('open')
  overlay.classList.toggle('open')
})