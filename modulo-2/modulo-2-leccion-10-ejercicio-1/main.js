"use strict";
function getRandomNumber() {
  fetch("https://api.rand.fun/number/integer?length=20")
    .then((response) => response.json())
    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
document.querySelector(".js-number").addEventListener("click", getRandomNumber);
