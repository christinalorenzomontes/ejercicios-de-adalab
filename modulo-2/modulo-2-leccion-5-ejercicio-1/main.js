"use strict";
const button = document.querySelector(".button");

function changeMessage() {
  console.log("Mi primer click, ¡olé yo y la mujer que me parió!");
  const text = document.querySelector(".text");
  text.innerHTML = "Mi primer click, ¡olé yo y la mujer que me parió!";
}

button.addEventListener("click", changeMessage);
