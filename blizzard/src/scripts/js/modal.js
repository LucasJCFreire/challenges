const btnOpenModal = document.querySelector(".js-open-modal");
const btnClose = document.querySelector(".close");
let tagHtml = document.documentElement;

btnOpenModal.addEventListener("click", (event) => {
  event.preventDefault();
  tagHtml.classList.add("show-modal");
});

btnClose.addEventListener("click", () => {
  tagHtml.classList.remove("show-modal");
});
