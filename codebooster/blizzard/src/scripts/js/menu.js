const btnMenu = document.querySelectorAll(".js-btn-menu");
const menuSite = document.querySelectorAll(".js-menu");
const menuHamburguer = document.querySelector("#menu-hamburguer");

btnMenu.forEach((btn, index) => {
  btn.addEventListener("click", (event) => {
    event.preventDefault();

    menuSite.forEach((menu) => {
      menu.classList.remove("active");
      menu.addEventListener("mouseleave", () => {
        menu.classList.remove("active");
        btnMenu.forEach((item) => {
          item.classList.remove("active");
        });
      });
    });

    btnMenu.forEach((item) => {
      item.classList.remove("active");
    });
    btn.classList.add("active");
    menuSite[index].classList.add("active");
  });
});

menuHamburguer.addEventListener("click", () => {
  menuSite[0].classList.toggle("active");
});
