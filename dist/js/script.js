const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", function (e) {
  e.stopPropagation(); // Mencegah bubbling ke document
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});

document.addEventListener("click", function (e) {
  const isClickInside = hamburger.contains(e.target) || navMenu.contains(e.target);
  if (!isClickInside) {
    hamburger.classList.remove("hamburger-active");
    navMenu.classList.add("hidden");
  }
});

// navbar fixed
// window.onscroll = function () {
//   const header = document.querySelector("header");
//   const fixedNav = header.offsetTop;

//   if (window.pageYOffset > fixedNav) {
//     header.classList.add("navbar-fixed");
//     toTop.classList.remove("hidden");
//     toTop.classList.add("flex");
//   } else {
//     header.classList.remove("navbar-fixed");
//     toTop.classList.remove("flex");
//     toTop.classList.add("hidden");
//   }
// };

const toggles = document.querySelectorAll(".faq-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    const content = toggle.nextElementSibling;
    const icon = toggle.querySelector("[data-icon]");
    const isHidden = content.classList.contains("hidden");

    // Tutup semua
    document.querySelectorAll(".faq-content").forEach((el) => {
      el.classList.add("hidden");
    });
    document.querySelectorAll(".faq-toggle [data-icon]").forEach((el) => {
      el.classList.remove("rotate-45");
      el.textContent = "+";
    });

    // Jika sedang tersembunyi, buka
    if (isHidden) {
      content.classList.remove("hidden");
      icon.classList.add("rotate-45");
      icon.textContent = "×";
    }
  });
});
