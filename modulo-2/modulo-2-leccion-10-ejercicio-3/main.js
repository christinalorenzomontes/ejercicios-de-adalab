"use strict";
// 1. Creamos referencia al botón
const button = document.querySelector(".btn");

// 2. Añadir eventlistener al botón
button.addEventListener("click", getUser);

// 3. Definir función getUser()
function getUser() {
  // Creamos referencia al valor del input
  const username = document.querySelector(".username").value;

  // 3.1. Hacer el fetch añadiendo la variable del username a la dirección para que nos de la info personalizada de dicho usuario
  fetch(`https://api.github.com/users/${username}`)
    // 3.2. hacer el json() al response del servidor
    .then((response) => response.json())

    // 3.3. Con el data que nos devuelve json, crear constantes que hagan referencia a img, párrafos, etc
    .then((data) => {
      const img = document.querySelector(".avatar");
      const name = document.querySelector(".name");
      const numberRepositories = document.querySelector(".repositories");

      // 3.4. Asignamos como valor de estas constantes los datos que hemos obtenido de la api. En este caso, las propiedades que queremos acceder son: "name" (nombre), "avatarl_url" (imagen) y "public_repos" (nº de repositorios). Si no entiendes de dónde he sacado estos nombres, échale un ojo a este ejemplo (de Miguel tihihi): https://api.github.com/users/migueldelmazo
      img.src = data.avatar_url;
      name.innerHTML = data.name;
      numberRepositories.innerHTML = data.public_repos;
    });
}
