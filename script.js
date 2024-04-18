let navBtn = document.querySelector(".btn-mobile-nav");
let header = document.querySelector(".header");

function toggleNav() {
  header.classList.toggle("nav-open");
}

navBtn.addEventListener("click", toggleNav);
