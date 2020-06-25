"use strict";
//Vamos a crear un objeto que sea una cesta de peras, que debe tener varias propiedades y varios métodos:
const cart = {
  max: 4,
  min: 0,
  actual: 6,
  initial: 2,
  addPear: function () {
    if (this.actual >= this.max) {
      this.actual = this.max;
    } else {
      this.actual += 1;
    }
  },
  removePear: function () {
    if (this.actual <= this.min) {
      this.actual = this.min;
    } else {
      this.actual -= 1;
    }
  },
  reset: function () {
    this.actual = this.initial;
  },
};

cart.removePear();
cart.reset();

//No entiendo el ejercicio, pedir explicación.
