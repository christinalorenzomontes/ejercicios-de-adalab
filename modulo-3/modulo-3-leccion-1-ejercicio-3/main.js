import { Dog, FAMOUS_DOGS } from "./dog.js";

const hachiko = new Dog();

console.log(`Some famous dogs in history: ${FAMOUS_DOGS.join(", ")}...`); // 'Some famous dogs in history: Hachiko, Laika, 101 Dalmatians...'
hachiko.bark(); // 'Wan, wan!'
