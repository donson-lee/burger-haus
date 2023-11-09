import "./styles/main.scss";

const hamburger = document.querySelector(".icons .fa-bars");
const navBar = document.querySelector(".navbar");
const closeIcon = document.querySelector(".icons .fa-times");
const logoHome = document.querySelector(".logo-pane");

const navLinks = document.querySelectorAll(".navbar a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.forEach((newLink) => {
      newLink.classList.remove("stage");
    });
    link.classList.add("stage");
  });
});

logoHome.onclick = () => {
  closeIcon.classList.remove("open");
  hamburger.classList.toggle("fa-bars");
  navBar.classList.remove("active");
};

hamburger.onclick = () => {
  hamburger.classList.remove("fa-bars");
  navBar.classList.add("active");
  closeIcon.classList.add("open");
};

closeIcon.onclick = () => {
  closeIcon.classList.remove("open");
  hamburger.classList.toggle("fa-bars");
  navBar.classList.remove("active");
};

navBar.onclick = () => {
  closeIcon.classList.remove("open");
  navBar.classList.remove("active");
  hamburger.classList.toggle("fa-bars");
};
