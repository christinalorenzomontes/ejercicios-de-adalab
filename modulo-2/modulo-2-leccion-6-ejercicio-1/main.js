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

const adalaber2 = {
  name: "Rocío",
  age: 31,
  ocuppation: "actriz",
};

// Muestra en la consola 'Rocío, 31, actriz'
console.log(adalaber2.name);
console.log(adalaber2.age);
console.log(adalaber2.occupation);

// Muestra en la consola 'Rocío, 31, actriz'
console.log(adalaber2["name"]);
console.log(adalaber2["age"]);
console.log(adalaber2["occupation"]);
