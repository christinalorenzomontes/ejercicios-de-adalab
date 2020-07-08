"use strict";
//Poniendo orden en nuestros usuarios
//Vamos a volver al listado de usuarios del ejercicio 6, porque nos ha dado la manía de tenerlos ordenados.

const users = [
  { name: "María", isPremium: false, pin: 2389 },
  { name: "Lucía", isPremium: true, pin: 2384 },
  { name: "Susana", isPremium: true, pin: 2837 },
  { name: "Rocío", isPremium: false, pin: 5232 },
  { name: "Inmaculada", isPremium: false, pin: 8998 },
];

//¿Podrías ordenarlos por orden alfabético ?
const users2 = users.sort();
console.log(users2);

//¿Y por su número de PIN ?

const users3 = users.sort((a, b) => a.pin - b.pin);
console.log(users3);
