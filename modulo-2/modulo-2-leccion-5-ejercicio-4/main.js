"use strict";

const lorem = document.querySelector(".lorem");

window.addEventListener("scroll", function () {
  const scrollValue = window.scrollY;

  if (scrollValue > 250) {
    lorem.classList.add("change1");
    lorem.classList.remove("change2");
    console.log("hola");
  } else {
    lorem.classList.add("change2");
    lorem.classList.remove("change1");
  }
});
