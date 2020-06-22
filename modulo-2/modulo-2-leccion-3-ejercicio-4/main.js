"use strict";

let age = 10;
let ageDog;

if (age === 1) {
  ageDog = 15;
  console.log(`la edad humana de tu perro es ${ageDog}`);
} else if (age === 2) {
  ageDog = 9 + 15;
  console.log(`la edad humana de tu perro es ${ageDog}`);
} else if (age > 2) {
  ageDog = (age - 2) * 5 + 24;
  console.log(`la edad humana de tu perro es ${ageDog}`);
}
