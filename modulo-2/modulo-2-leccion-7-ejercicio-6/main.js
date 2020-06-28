"use strict";

// Constante que hace referencia a botón
const button = document.querySelector(".js-button");

// Función handler de qué pasa cuando clickeamos el botón
function showMessage() {
  // La constante que recoge el valor que hemos introducido en el input la declaramos una vez hemos pulsado el botón. Esto es importante, si la declaramos arriba debajo de la de button, su valor será el que por defecto tiene el value de un input vacío. --> queremos que el valor se le asigne una vez hemos escrito los libros y pulsado el botón

  // Creamos dos constantes que recogen las dos pelis introducidas
  const movieInput1 = document.querySelector("#movie1").value;
  const movieInput2 = document.querySelector("#movie2").value;

  // Array que tendrá como elementos las dos pelis
  const movieList = [movieInput1, movieInput2];

  // Crear for...of loop que va a mostrar un mensaje por cada libro:
  for (const movies of movieList) {
    console.log(
      `¡A mí también me encantó "${movies}"! Tenemos mucho en común, humana.`
    );
  }
}

button.addEventListener("click", showMessage);
