import { getHeroById } from "./import.js";

// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     const hero = getHeroById(2);
//     resolve(hero);
//     reject("No se pudo encontrar el heroe");
//   }, 2000);
// });

// promise
//   .then((hero) => {
//     console.log(hero);
//   })
//   .catch((err) => console.warn(err));

// * para enviar parámetro a la promesa
const getHeroByIdAsync = (id) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const hero = getHeroById(id);
      hero ? resolve(hero) : reject("No se pudo encontrar el heroe");
    }, 1000);
  });
};

getHeroByIdAsync(1).then(console.log).catch(console.warn);
