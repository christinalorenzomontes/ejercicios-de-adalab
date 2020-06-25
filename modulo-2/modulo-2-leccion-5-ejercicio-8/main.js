"use strict";
const strawberry = document.querySelector(".fruit-strawberry");
const banana = document.querySelector(".fruit-banana");
const kiwi = document.querySelector(".fruit-kiwi");
const avocado = document.querySelector(".fruit-avocado");
const watermelon = document.querySelector(".fruit-watermelon");

function handleFruitClick(event) {
  // Asignamos a una constante el elemento
  // sobre el que pusimos el `listener`
  // para trabajar cómodamente con él
  const selectedFruit = event.currentTarget;

  selectedFruit.classList.toggle("fruit--selected");
}

strawberry.addEventListener("click", handleFruitClick);
banana.addEventListener("click", handleFruitClick);
kiwi.addEventListener("click", handleFruitClick);
avocado.addEventListener("click", handleFruitClick);
watermelon.addEventListener("click", handleFruitClick);
