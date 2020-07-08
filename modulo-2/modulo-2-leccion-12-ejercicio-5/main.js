"use strict";

//Vamos a partir del ejercicio 11 de la sesión 2.5, donde aprendimos a eliminar el comportamiento por defecto del enlace.
//En este ejercicio vamos a terminar lo que empezamos, y podremos hacer scroll hasta cada sección usando enlaces desde JS.
//Para ello seguimos estos pasos 1.
//Ponemos un atributo data - id a los enlaces para indicar a qué elemento debemos hacer scroll 2.
//Al hacer click, eliminamos el comportamiento por defecto 3.
//Con getBoundingClientRect buscamos la posición del elemento en la página 4.
//Usando window.scrollTo hacemos scroll hasta el elemento pero restando alguno píxeles para que la cabecera fija no lo tape

const buttonInicio = document.querySelector(".js-click-inicio");
const buttonMedio = document.querySelector(".js-click-medio");
const buttonFin = document.querySelector(".js-click-fin");

//Añadimos atributo a los enlaces
buttonInicio.setAttribute("data-id", "inicio");
buttonMedio.setAttribute("data-id", "medio");
buttonFin.setAttribute("data-id", "fin");

//Recogemos la información de las secciones de los párrafos
const linkInicio = document.querySelector("#inicio");
const linkMedio = document.querySelector("#medio");
const linkFin = document.querySelector("#fin");

//Obtenemos la informacion relativa a la posicion de las secciones
const positionInicio = linkInicio.getBoundingClientRect();
const positionMedio = linkMedio.getBoundingClientRect();
const positionFin = linkFin.getBoundingClientRect();
console.log(positionInicio);
console.log(positionMedio);
console.log(positionFin);

function handleButtonClick(event) {
  event.preventDefault();
  if (event.currentTarget === buttonInicio) {
    window.scrollTo({
      top: 150 - 190,
      behavior: "smooth",
    });
  } else if (event.currentTarget === buttonMedio) {
    window.scrollTo({
      top: 668 - 190,
      behavior: "smooth",
    });
  } else if (event.currentTarget === buttonFin) {
    window.scrollTo({
      top: 1186 - 190,
      behavior: "smooth",
    });
  }
}

buttonInicio.addEventListener("click", handleButtonClick);
buttonMedio.addEventListener("click", handleButtonClick);
buttonFin.addEventListener("click", handleButtonClick);

//Copiado de soluciones de alumnas para razonar en pair programming
