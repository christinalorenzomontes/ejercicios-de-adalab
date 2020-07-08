"use strict";

// CCrear una página HTML con una lista ul vacía.
//Vamos a partir de un array con 3 elementos const numbers = [1, 2, 3].
//Vamos a añadir a la lista tres elementos li, que corresponden al contenido del array.
//Usaremos los métodos avanzados para manipular el DOM, no innerHTML.
//Array dado por el ejercicio
const numbers = [1, 2, 3];

//Usamos for of para recorrer cada uno de los elementos del array
for (const number of numbers) {
  console.log(number);

  //Creamos nuevo elemento
  const newItem = document.createElement("li");

  //Creamos nuevo contenido cuyo valor es el elemento del array
  const newContent = document.createTextNode(number);

  //Añadimos el contenido al elemento li
  newItem.appendChild(newContent);

  //añadimos el nuevo li y su contenido a la lista ul
  const items = document.querySelector(".items");
  items.appendChild(newItem);
}
/*for (let i = 0; i < numbers.length; i++) {
  const items = document.querySelector('.items');

  const newItem = document.createElement('li');

  const newContent = document.createTextNode(numbers[i]);

  newItem.appendChild(newContent);

  items.appendChild(newItem);
}*/
