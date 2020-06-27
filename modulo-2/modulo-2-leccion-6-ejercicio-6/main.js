"use strict";
//Vamos a crear un objeto que sea una cesta de peras, que debe tener varias propiedades y varios métodos:

let cartPears = {
  numMaxPears: 12,
  numMinPeras: 2,
  currentNumOfPears: 8,
  initialNumOfPears: 0,
  add: function () {
    this.currentNumOfPears = this.currentNumOfPears + 1;
    //this.currentNumOfPears++;
  },
  remove: function () {
    this.currentNumOfPears = this.currentNumOfPears - 1;
    // this.currentNumOfPears--;
  },
  resetCart: function () {
    this.currentNumOfPears = this.initialNumOfPears;
  -},
};

// console.log(cart.Pears.currentNumOfPears);
cartPears.add();
console.log(cartPears.currentNumOfPears);
cartPears.remove();
console.log(cartPears.currentNumOfPears);
cartPears.resetCart();
console.log(cartPears.currentNumOfPears);
