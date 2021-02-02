import heros, { names } from "./data/heros.js";

// console.log(heros);
// console.log(names);

export const getHeroById = (idInput) => {
  return heros.find(({ id }) => id === idInput);
};

// console.log(getHeroById(2));

export const getHeroByOwner = (ownerInput) => {
  return heros.filter(({ owner }) => owner === ownerInput);
};

// console.log(getHeroByOwner("DC"));
