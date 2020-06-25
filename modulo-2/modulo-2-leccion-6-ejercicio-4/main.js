"use strict";

const button = document.querySelector(".button");

button.addEventListener("click", function logEvent(ev) {
  console.log(ev);
  console.log(`Type es un ${typeof ev.type}`);
});
