"use strict";

const box = document.querySelector(".box");
const title = document.querySelector("h1");
const text = document.querySelector("p");

if (box.classList.contains("warning")) {
  title.innerHTML = "AVISO";
  text.innerHTML = "Tenga cuidado";
} else if (box.classList.contains("error")) {
  title.innerHTML = "ERROR";
  text.innerHTML = "Ha surgido un error";
} else if (box.classList.contains("success")) {
  title.innerHTML = "CORRECTO";
  text.innerHTML = "Los datos son correctos";
}
