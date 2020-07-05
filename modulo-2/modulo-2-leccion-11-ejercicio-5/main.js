"use strict";

// Cuando el usuario escriba elija una opción del radio (light/dark), cambiar la clase del container a light/dark Y guardar la selección de la usuaria en el localStorage.

// 1.1 Guardar los inputs en un array y crear una cosntante para el contenedor
const radioButtons = document.querySelectorAll(".radiobutton");
const container = document.querySelector(".container");

// 1.2 Añadir un eventlistener a los dos radioButtons, para eso, hacemos un loop y aplicamos a los dos el eventlistener
for (const button of radioButtons) {
  button.addEventListener("change", changeTheme);
}

// Creamos función handler changeTheme. Como se le aplica a los dos botones, le ponemos el event para poder diferenciar sobre qué botón hemos pinchado
function changeTheme(event) {
  // Condicional para mostrar light si hemos pinchado sobre radio con id light y lo opuesto
  if (event.target === radioButtons[0]) {
    //radioButtons[0] es el light
    container.classList.add("light");
    container.classList.remove("dark");
  } else if (event.target === radioButtons[1]) {
    // este es el dark
    container.classList.add("dark");
    container.classList.remove("light");
  }

  // Guardar en el localStorage:
  // Para saber qué value tenemos que coger, vamos a hacer un loop

  for (const button of radioButtons) {
    if (button.checked) {
      localStorage.setItem("colorTheme", button.value);
    }
  }
}
