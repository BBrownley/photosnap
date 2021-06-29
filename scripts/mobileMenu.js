const mobileMenuHandler = (() => {
  const menuIcon = document.querySelector(".header .menu-icon");
  const menu = document.querySelector(".mobile-menu");
  const menuCloseEl = document.querySelector(".mobile-menu .close");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("opened");
    menu.classList.toggle("opened");
  });

  menuCloseEl.addEventListener("click", () => {
    menuIcon.classList.remove("opened");
    menu.classList.remove("opened");
  });
})();