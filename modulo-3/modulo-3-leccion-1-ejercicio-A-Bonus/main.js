"use strict";
//Vamos a crear un programita que haga cálculos geométricos sencillos. En el programa definiremos la clase Square,
//que tendrá al menos:
//Un método para calcular el perímetro (perimeter()) del cuadrado
//(multiplica la longitud del lado por el número de lados)
//Un método para calcular el área (area()) del cuadrado (elevar al cuadrado el lado)
//Los métodos recibirán la longitud del lado (side) como parámetro.
//Calcularemos y mostraremos el perímetro y el área de un cuadrado de 9 de lado.
class Dog {
  constructor(name) {
    this.name = name;
  }

  bark() {
    console.log("Woof, woof!");
  }

  reactToCall(shout) {
    if (shout.includes(this.name)) {
      console.log(`${this.name} wags its tail, happily.`);
    } else {
      this.bark();
    }
  }
}

const laika = new Dog("Laika");

laika.reactToCall("Hey, Laika!"); // 'Laika wags its tail, happily.'
laika.reactToCall("Hey, Hachiko!"); // 'Woof, woof!'
