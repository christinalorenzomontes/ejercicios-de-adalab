"use strict";

function getEl(selector) {
  const element = document.querySelector(selector);
  //Vaciar es element

  if (!element) {
    console.log(
      `No existe ningún elemento con clase, id o tag llamado ${element}`
    );
  }

  return element;
}

function oddEven(number) {
  return number % 2 === 0;
}

const value = getEl(".number").innerHTML;
console.log(value);

const number = parseInt(value);

const isOdd = oddEven(number);

if (isOdd) {
  console.log("Este número es PAR");
} else {
  console.log("Este número es IMPAR");
}
