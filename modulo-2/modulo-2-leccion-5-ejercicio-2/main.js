"use strict";

const button = document.querySelector(".button");

function addName() {
  const name = document.querySelector(".name").value;
  console.log(`Hola ${name}, ¿quieres ser mi amigo?`);
  alert(`Hola ${name}, ¿quieres ser mi amigo?`);
}

button.addEventListener("click", addName);
