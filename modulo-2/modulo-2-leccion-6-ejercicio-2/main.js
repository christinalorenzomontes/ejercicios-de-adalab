"use strict";
const adalaber1 = {
  name: "Susana",
  age: 34,
  occupation: "periodista",
};

// Muestra en la consola 'Susana, 34, periodista'
console.log(adalaber1.name);
console.log(adalaber1.age);
console.log(adalaber1.occupation);

alert(adalaber1.name);
alert(adalaber1.age);
alert(adalaber1.occupation);

// Muestra en la consola 'Susana, 34, periodista'
console.log(adalaber1["name"]);
console.log(adalaber1["age"]);
console.log(adalaber1["occupation"]);

adalaber1.run = (phrase) => `Yo estoy: ${phrase}`;

// Muestra en la consola 'Yo estoy: corriendo'
console.log(adalaber1.run("corriendo"));

adalaber1.runAMarathon = (distance) =>
  `Yo estoy corriendo un maratón de ${distance} kilómetros.`;

// Muestra en la consola 'Yo estoy: corriendo'
console.log(adalaber1.runAMarathon("50"));
alert(adalaber1.runAMarathon("50"));
