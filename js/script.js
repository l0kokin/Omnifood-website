////////////////////////////////
// Mobile navigaion
const navBtn = document.querySelector(".btn-mobile-nav");
const header = document.querySelector(".header");

function toggleNav() {
  header.classList.toggle("nav-open");
}

navBtn.addEventListener("click", toggleNav);

//////////////////////////////
// Setting the current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear;

/////////////////////////////
// Smooth scrolling
const allLinks = document.querySelectorAll("a:link");
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const href = link.getAttribute("href");

    // Scroll back to top
    if (href === "#")
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });

    // Scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelectorAll(href);
      sectionEl.scrollIntoView({ behavior: smooth });
    }

    // Close mobile navigation
    if (link.classList.contains("main-nav-link"))
      header.classList.toggle("nav-open");
  });
});

///////////////////////////
// Sticky navigation
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];

    if (ent.isIntersecting === false) {
      document.body.classList.add("sticky");
    }

    if (ent.isIntersecting === true) {
      document.body.classList.remove("sticky");
    }
  },
  {
    // In the viewport
    root: null,
    threshold: 0,
    rootMargin: "-80px",
  }
);
obs.observe(sectionHeroEl);
