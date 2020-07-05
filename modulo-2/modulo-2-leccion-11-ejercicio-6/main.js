"use strict";

/* Crear página web con un input donde escribimos el nombre de un personaje (o parte) y un botón. Al hacer click, nuestra web debe mostrar un listado con los personajes que coinciden con la búsqueda indicando su nombre y géneroConociendo LS
Escribir datos en formularios es muy tedioso para los usuarios. ¡Vamos a cachearlos para facilitarles la vida!
Prepara un input de texto para el nombre y un párrafo vacío
Cada vez que la usuaria escriba su nombre (keyUp) tenemos que pintar el valor en el párrafo y guardarlo en localStorage.
Al recargar la página tenemos que consultar localStorage y, si hay algún nombre guardado, rellenar el input y el párrafo.*/
// 1.1 Crear constante que hace referencia al input
const username = document.querySelector(".name");
const usersurname = document.querySelector(".surname");
//1.2 Añadirle el eventlistener
document.addEventListener("keyup", function () {
  //1.3 Vamos a pintar en el HTML
  const papa = document.querySelector(".paragraph");
  papa.innerHTML = username.value + " " + usersurname.value;

  //1.4 Creamos objeto con los datos
  const userInfo = {
    name: username.value,
    surname: usersurname.value,
  };
  //1.5 Guardar en el localstorage haciendo stringify (pasar el objeto a string)
  localStorage.setItem("userInfo", JSON.stringify(userInfo));
  console.log(papa);
});
