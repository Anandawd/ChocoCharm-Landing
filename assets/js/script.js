document.addEventListener("DOMContentLoaded", () => {
  const navMenu = document.getElementById("nav-menu");
  const hamburger = document.getElementById("hamburger");
  const navClose = document.getElementById("nav-close");

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

  // ============================================
  // Animasi Scroll Produk dari Kiri/Kanan
  // ============================================

  const animateProduct = document.querySelectorAll(
    ".animate-left, .animate-right"
  );

  function handleScrollAnimation() {
    animateProduct.forEach((el) => {
      const pos = el.getBoundingClientRect().top; // Posisi elemen relatif ke viewport
      const windowHeight = window.innerHeight;

      // Jika elemen berada dalam viewport, tambahkan class 'show'
      if (pos < windowHeight - 100) {
        el.classList.add("show-product");
      } else {
        el.classList.remove("show-product");
      }
    });
  }

  window.addEventListener("scroll", handleScrollAnimation);

  handleScrollAnimation();
});
