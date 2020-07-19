"use strict";
//Prueba los ejemplos anteriores exportando datos desde un fichero e importándolos desde otros.
//Asegúrate de entender bien cómo funcionan las rutas para importar / exportar adecuadamente.

class Dog {
  bark() {
    console.log("Wan, wan!");
  }
}

const FAMOUS_DOGS = ["Hachiko", "Laika", "101 Dalmatians"];

export { Dog, FAMOUS_DOGS };

//Ver en el pair por qué no funciona
