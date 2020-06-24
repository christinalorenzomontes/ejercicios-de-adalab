"use strict";

function getEl(selector) {
  const result = document.querySelector(selector);
  if (!result) {
    console.error(
      `No existe ningún elemento con clase, id o tag llamado ${selector}`
    );
  }
  return result;
}

const btn2El = getEl(".btn");
btn2El.innerHTML = "Hola bebé";

const btn3El = getEl(".btn2");
btn3El.innerHTML = "¿Qué tal, adalaber?";
