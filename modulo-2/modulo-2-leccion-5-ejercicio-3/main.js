"use strict";

const loremIpsum = document.querySelector(".ipsum");

function duplicateIpsum() {
  loremIpsum.innerHTML = loremIpsum.innerHTML + loremIpsum.innerHTML;
}

loremIpsum.addEventListener("mouseover", duplicateIpsum);
