let menuButton = document.getElementById('menubtn');
let slideNav = document.getElementById('nav-container');
let menu = document.getElementById('menuimg');

slideNav.style.right = '-250px';

menuButton.onclick = function () {
  if (slideNav.style.right == '-250px') {
    slideNav.style.right = '0';
  } else {
    slideNav.style.right = '-250px';
  }
};
const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});
