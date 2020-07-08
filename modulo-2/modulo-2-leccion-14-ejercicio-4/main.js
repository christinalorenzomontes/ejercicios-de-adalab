"use strict";
//Con JavaScript, crear un código para mostrar una ventana en nuestro navegador
//una vez transcurridos 15 segundos que ponga "su sesión ha expirado"(creada usando HTML y CSS).

"use strict";
const removeMsg = () => {
  const msg = document.querySelector(".container");
  msg.innerHTML = "";
};

setTimeout(removeMsg, 15000);
