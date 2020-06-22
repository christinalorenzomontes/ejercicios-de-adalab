"use strict";

const partner = "Elena";
const titleElement = document.querySelector("h1");

titleElement.innerHTML = `El nombre de mi compañera es ${partner}, y está compuesto por  
  ${partner.length} 
   caracteres.`;
console.log(`El nombre de mi compañera es 
${partner}, y está compuesto por  
${partner.length} 
 caracteres.`);
