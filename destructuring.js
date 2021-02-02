const person = {
  name: "Tony",
  age: 45,
  clave: "Ironman",
};

const { name } = person;
console.log(name);

const useContext = ({ name, age, clave, range = "Captain" }) => {
  return {
    claveName: clave,
    years: age,
    latlng: {
      lat: 1324.42243,
      lng: -3224.223,
    },
  };
};

const {
  claveName,
  years,
  latlng: { lat, lng },
} = useContext(person);

console.log(claveName, years);
console.log(lat, lng);

const characters = ["Goku", "Vegeta", "Trunks"];
const [, , p3] = characters;
console.log(p3);

const returnArray = () => {
  return ["ABC", 123];
};

const [letters, numbers] = returnArray();
console.log(letters, numbers);

const useState = (value) => {
  return [
    value,
    () => {
      console.log("Hello world");
    },
  ];
};

const [nombre, setNombre] = useState("Goku");
// arr[1]();

console.log(nombre);
setNombre();
