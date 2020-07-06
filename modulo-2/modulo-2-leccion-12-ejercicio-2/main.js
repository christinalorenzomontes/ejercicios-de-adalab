"use strict";

//Crea una página que contenga tres imágenes, usando un select de formulario pregúntale a la usuaria qué ciudad quiere visitar.
//Si la usuaria elige Madrid, haz que en cada imagen se muestre una foto de Madrid
//Haz lo mismo para París y Nueva York

// Creamos la constante del elemento select
const citySelect = document.querySelector("#citySelect");

// Creamos constante del div vacío contenedor que tenemos en el index, aquí introduciremos la imagen
const container = document.querySelector(".image-container");

// Creamos constante que crea un elemento de imagen
const newItem = document.createElement("img");

// Añadimos nuevo item como hijo del contenedor
container.appendChild(newItem);

// Creamos la función que se encarga mostrar una foto u otra

function showCity() {
  // Cambiamos el atributo de src del newItem dependiendo de la ciudad que se elija
  if (citySelect.value === "1") {
    newItem.setAttribute("src", "./images/Madrid.jpg");
  } else if (citySelect.value === "2") {
    newItem.setAttribute("src", "./images/Paris.jpg");
  } else if (citySelect.value === "3") {
    newItem.setAttribute("src", "./images/NY.jpg");
  }
}

// Creamos el listener del elemento select que va a realizar un cambio de valor (change) para ejecutar la función showCity()
citySelect.addEventListener("change", showCity);
