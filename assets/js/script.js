document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const hamburger = document.getElementById("hamburger");
  const navClose = document.getElementById("nav-close");

  console.log("navMenu");
  console.log(navMenu);
  console.log("navClose");
  console.log(navClose);
  console.log("hamburger");
  console.log(hamburger);

  // Show menu
  if (hamburger) {
    hamburger.addEventListener("click", () => {
      console.log("hamburger clicked");
      navMenu.classList.add("show-menu");
    });
  }

  // Hide menu when close button is clicked
  if (navClose) {
    navClose.addEventListener("click", () => {
      console.log("Close button clicked");
      if (navMenu) {
        navMenu.classList.remove("show-menu");
        console.log("Menu closed");
      } else {
        console.log("navMenu element not found");
      }
    });
  }

  // Remove menu when nav links are clicked
  const navLinks = document.querySelectorAll(".nav-link");

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      navMenu.classList.remove("show-menu");
    });
  });
});
