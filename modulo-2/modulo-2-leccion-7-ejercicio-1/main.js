"use strict";

const movies = ["Laberrinto de pasiones", "Moulin Rouge", "The leftovers"];

console.log(movies);

movies[3] = "Pure";

console.log(movies);

function workWithMovies() {
  return `Me encantan estas pelis: ${movies}!`;
}
console.log(workWithMovies());
