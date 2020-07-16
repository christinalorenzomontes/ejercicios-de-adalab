"use strict";
//Vamos a crear un programita que haga cálculos geométricos sencillos. En el programa definiremos la clase Square,
//que tendrá al menos:
//Un método para calcular el perímetro (perimeter()) del cuadrado
//(multiplica la longitud del lado por el número de lados)
//Un método para calcular el área (area()) del cuadrado (elevar al cuadrado el lado)
//Los métodos recibirán la longitud del lado (side) como parámetro.
//Calcularemos y mostraremos el perímetro y el área de un cuadrado de 9 de lado.

class Square {
  perimeter(side) {
    return side * 4;
  }
  area(side) {
    return side * side;
  }
}

const mySquare = new Square();

let squareSide = 9;
console.log(
  `El cuadrado tiene un perimetro de ${mySquare.perimeter(squareSide)}cm`
);
console.log(`El cuadrado tiene un perimetro de ${mySquare.area(squareSide)}cm`);
