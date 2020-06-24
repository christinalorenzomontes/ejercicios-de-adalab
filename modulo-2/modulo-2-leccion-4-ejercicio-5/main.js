"use strict";

function getEl(a) {
  return document.querySelector(a);
}
const btn2El = getEl(".btn2");
btn2El.innerHTML = "Hola bebé";

const btn3El = getEl(".btn3");
btn3El.innerHTML = "¿Qué tal, adalaber?";
