function burgerMenu() {
  const menu = document.querySelector(".header__right_js"),
    menuItem = document.querySelectorAll(".menu__list-item_js"),
    burger = document.querySelector(".burger");

  burger.addEventListener("click", () => {
    burger.classList.toggle("burger_active");
    menu.classList.toggle("header__right_js-active");
  });

  menuItem.forEach((item) => {
    item.addEventListener("click", () => {
      burger.classList.toggle("burger_active");
      menu.classList.toggle("header__right_js-active");
    });
  });
}

burgerMenu();
