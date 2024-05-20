const adviceButton = document.querySelector(".advice-button");
const adviceTitle = document.querySelector(".advice-title");
const adviceText = document.querySelector(".advice-text");

async function adviceRandom(){
    const resposta = await fetch ("https://api.adviceslip.com/advice")
    const json = await resposta.json()
    const title = json.slip.id
    const advice = json.slip.advice

    adviceTitle.innerHTML = `Advice #${title}`
    adviceText.innerHTML = advice
}

adviceButton.addEventListener('click', () => {
    adviceRandom()
})
