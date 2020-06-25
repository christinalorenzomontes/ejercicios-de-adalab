"use strict";
const adalaber1 = {
  name: "Susana",
  age: 34,
  occupation: "periodista",
};

adalaber1.showBio = function () {
  return (
    "Hola, me llamo " +
    this.name +
    ", tengo " +
    this.age +
    " años y soy " +
    this.occupation +
    "."
  );
};

// Muestra en la consola 'Hola, me llamo Susana, tengo 34 años y soy periodista.'
console.log(adalaber1.showBio());

const adalaber2 = {
  name: "Rocío",
  age: 31,
  occupation: "actriz",
};

adalaber2.showBio = function () {
  return (
    "Hola, me llamo " +
    this.name +
    ", tengo " +
    this.age +
    " años y soy " +
    this.occupation +
    "."
  );
};

// Muestra en la consola 'Hola, me llamo Rocío, tengo 31 años y soy actriz.'
console.log(adalaber2.showBio());
alert(adalaber2.showBio());
