const firstDogImage =
  "<img src=https://images.dog.ceo/breeds/schipperke/n02104365_8156.jpg>";
const firstDogName = "Dina";

const secondDogImage =
  "<img src=https://images.dog.ceo/breeds/collie-border/n02106166_355.jpg>";
const secondDogName = "Luna";

const thirdDogImage =
  "<img src=https://images.dog.ceo/breeds/affenpinscher/n02110627_7065.jpg>";
const thirdDogName = "Lana";

// Obtenemos el elemento con el que queremos trabajar usando document.querySelector()
const titleElement1 = document.querySelector(".li1");

// Cambiamos su contenido con innerHTML
titleElement1.innerHTML = firstDogName + " " + firstDogImage;

const titleElement2 = document.querySelector(".li2");
titleElement2.innerHTML = secondDogName + " " + secondDogImage;

const titleElement3 = document.querySelector(".li3");
titleElement3.innerHTML = thirdDogName + " " + thirdDogImage;
