let btnContinue = document.querySelector("#btn-continue");
let scoreValue = document.querySelector("#score");
let itemsToggle = document.querySelectorAll(".scoreResult");

btnContinue.addEventListener("click", () => {
  for (let count = 0; count <= 76; count++) {
    setTimeout(() => {
      scoreValue.textContent = count;
      verificar(count);
    }, count * 30);
  }
});

function verificar(count) {
  itemsToggle.forEach((item) => {
    item.classList.add("toogleVisible");
  });

  if (count == 76) {
    itemsToggle.forEach((item) => {
      item.classList.remove("toogleVisible");
    });
  }
}
