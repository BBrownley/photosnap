const mobileMenuHandler = (() => {
  const menuIcon = document.querySelector(".header .menu-icon");
  const menu = document.querySelector(".mobile-menu");

  menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("opened");
    menu.classList.toggle("opened");
  });
})();
