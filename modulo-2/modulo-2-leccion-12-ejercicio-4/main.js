"use strict";
//Vamos a crear un div en HTML que contenga tres párrafos con un texto aleatorio.
//Con la ayuda de JavaScript vamos a obtener su tamaño usando la propiedad offsetHeight.
//Posteriormente y usando el atributo HTML style vamos a configurar que su altura será un tercio de la actual.

// Creamos array que contenga a los tres párrafos lorem ipsum
const paragraphs = document.querySelectorAll("p");

// Con un for of recorremos cada elemento del array
for (const paragraph of paragraphs) {
  // Creamos constante que es la propiedad del tamaño (offsetHeight) del párrafo
  const offsetHeight = paragraph.offsetHeight;
  console.log(offsetHeight);
  // // Modificamos el atributo height del párrafo para que sea un tercio del offsetHeight del mismo (RECUERDA que height espera una expresión tipo "200px", con lo que no valdría con sólo poner pHeight, sino que hay que añadirle el px!!)
  // paragraph.style.height = `${offsetHeight / 3}px`;
  // console.log(offsetHeight);
}
