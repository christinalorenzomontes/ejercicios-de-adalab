"use strict";

// Crear página web con un input donde escribimos el nombre de un personaje (o parte) y un botón. Al hacer click, nuestra web debe mostrar un listado con los personajes que coinciden con la búsqueda indicando su nombre y género
//
// 1.1 Crear constante que hace referencia al botón
const btn = document.querySelector(".js-button");
//1.2 Añadirle el eventlistener
btn.addEventListener("click", findCharacter);

// 2. Crear una función findCharacter();
function findCharacter() {
  //Guardar valor del input en una constante
  const characterSearch = document.querySelector(".character").value;

  // 2.1. Hacer petición a la  API de star wars utilizando el search query y añadiéndole la variable con el input (characterSearch) al query de search
  fetch(`https://swapi.dev/api/people/?search=${characterSearch}`)
    .then((searchResponse) => searchResponse.json())
    .then((searchData) => {
      // 2.2 Pintamos la información referida al nombre y al género del personaje
      // Creamos constante que recoja los datos
      const characters = searchData.results; // para entender el results tienes que echarle un ojo a la documentación de la API de star wars 👉🏻Nos devuelve un ARRAY
      //Creamos referencia a la lista (ul) y una variable que albergue todo el contenido con todos los li
      const characterList = document.querySelector("ul");
      let characterContent = "";

      // Creamos constante para el nombre del personaje y otro para el género (como puede que haya varios personajes con el mismo nombre, tenemos que hacer un loop que vaya a recoger todos los posibles nombres y géneros de los personajes y los pinte en el HTML)
      for (let i = 0; i < characters.length; i++) {
        const characterName = characters[i].name;
        const characterGender = characters[i].gender;
        console.log(characterGender);
        console.log(characterName);
        characterContent += `<li> Name: ${characterName} --- Gender: ${characterGender}</li >`;
      }

      console.log(characterContent);

      // Una vez que terminamos el loop y que characterContent tiene toooodos los li con todos los personajes y su información, lo añadimos a la lista
      characterList.innerHTML = characterContent;
    });
}
