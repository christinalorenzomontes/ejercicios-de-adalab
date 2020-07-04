"use strict";
function getRandomNumber() {
  fetch("https://api.rand.fun/number/integer")
    .then((response) => response.html())
    .catch((error) => console.log(`Ha sucedido un error: ${error}`))

    .then((data) => {
      document.querySelector(".js-result").innerHTML = data.result;
    });
}
document.querySelector(".js-number").addEventListener("click", getRandomNumber);
