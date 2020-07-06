"use strict";
//Vamos a crear nuestro propio autocompletado de formularios.
//Para ello vamos a crear un formulario con tres campos:
// Nombre
// Apellidos
// Teléfono
//Por otro lado, en JavaScript tendremos un array de 3 objetos con esa estructura.
//Es decir, un listado 3 objetos, cada uno con nombre apellidos y teléfono.
//Pediremos a la usuaria que elija uno de esos 3 con un select con el nombre.
//Al seleccionarlo se rellenará el formulario automáticamente.

// Array de 3 objetos:
const informationSet = [
  {
    name: "Christina",
    surname: "La másreshulona",
    phone: 906090,
  },
  {
    name: "María",
    surname: "Los Pollospían",
    phone: 55055505,
  },
  {
    name: "Cristina",
    surname: "Laque Tedomina",
    phone: 88088808,
  },
];

// Referencia a los elementos del formulario
const inputName = document.querySelector("#name");
const inputSurname = document.querySelector("#surname");
const inputPhone = document.querySelector("#phone");
const profileSelect = document.querySelector(".info-set");

// Función que se encarga de rellenar el formulario según la opción del select que escojamos
function autoCompleteForm() {
  console.log("hola bebé");

  // Condicionales según el valor del select
  // Primer perfil
  if (profileSelect.value === "christina") {
    inputName.value = informationSet[0].name;
    inputSurname.value = informationSet[0].surname;
    inputPhone.value = informationSet[0].phone;

    // Segundo perfil
  } else if (profileSelect.value === "maria") {
    inputName.value = informationSet[1].name;
    inputSurname.value = informationSet[1].surname;
    inputPhone.value = informationSet[1].phone;

    // Tercer perfil
  } else if (profileSelect.value === "cristina") {
    inputName.value = informationSet[2].name;
    inputSurname.value = informationSet[2].surname;
    inputPhone.value = informationSet[2].phone;
  }
}

// EVENT LISTENER
profileSelect.addEventListener("change", autoCompleteForm);
