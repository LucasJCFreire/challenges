let leftBtn = document.querySelector("#leftBtn");
let rightBtn = document.querySelector("#rightBtn");
let card = document.querySelector("#card");
let devImage = document.querySelector("#devImage");
let devName = document.querySelector("#devName");
let devDescription = document.querySelector("#devDescription");
let count = 1;

leftBtn.addEventListener("click", () => {
  count = count - 1;
  if (count < 1) {
    count = personagens.length;
  }
  updateDev(count);
});

rightBtn.addEventListener("click", () => {
  count = count + 1;
  if (count > personagens.length) {
    count = 1;
  }
  updateDev(count);
});

function updateDev(count) {
  card.style.background = `url('./src/images/${
    personagens[count - 1].background
  }') no-repeat`;
  devName.innerHTML = personagens[count - 1].nome;
  devImage.src = `./src/images/${personagens[count - 1].imagem}`;
  devDescription.innerHTML = personagens[count - 1].descricao;
}
