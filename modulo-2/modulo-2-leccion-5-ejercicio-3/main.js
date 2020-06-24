"use strict";

const loremIpsum = document.querySelector(".ipsum");

function duplicateIpsum() {
  let loremIpsum2 = document.querySelector(".ipsum");

  loremIpsum2.innerHTML =
    "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantimum ullam unde expedita sapiente dolore facere. Voluptate esse quidem dolore quo quis minus sit, dolor porro tempore, dicta, vel cupiditate architectoLorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantimum ullam unde expedita sapiente dolore facere. Voluptate esse quidem dolore quo quis minus sit, dolor porro tempore, dicta, vel cupiditate architecto.";
}

loremIpsum.addEventListener("mouseover", duplicateIpsum);
