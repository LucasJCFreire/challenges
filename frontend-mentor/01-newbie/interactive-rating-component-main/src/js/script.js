let btnSubmit = document.querySelector("#btnSubmit");
let rate = document.querySelectorAll(".rate");
let valuation = document.querySelector(".valuation");
let result = document.querySelector(".result");
let textRated = document.querySelector(".ratingSelected");

let userResponse = 0;

rate.forEach((value, index) => {
  updatedActived(value, index);
});

btnSubmit.addEventListener("click", () => {
  if (userResponse > 0) {
    valuation.classList.add("hidden");
    result.classList.remove("hidden");
    textRated.innerHTML = `You selected ${userResponse} ou of 5`;
    confetti();
  } else {
    alert(
      "Please select an option before proceeding. Your choice matters to us!"
    );
  }
});

function updatedActived(value, index) {
  value.addEventListener("click", () => {
    rate.forEach((v) => {
      v.classList.remove("actived");
    });
    value.classList.add("actived");
    userResponse = index + 1;
  });
}
