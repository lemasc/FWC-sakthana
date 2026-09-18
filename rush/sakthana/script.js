const navbar = document.querySelector("nav");

const updateNavbar = () => {
  console.log(window.scrollY)
  navbar.dataset.scrolled = window.scrollY > 300;
};

window.addEventListener("scroll", () => {
  updateNavbar();
});

updateNavbar()