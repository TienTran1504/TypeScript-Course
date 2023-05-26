let stringArr = ["one", "2", "3"];
let mixedData = ["EVH", 1984, true];

mixedData.unshift("Jim");

let bands: string[] = [];
bands.push("Big Bang");

//Tuple
let myTuple: [string, number, boolean] = ["Tien", 12, true]; // tuple

let mixed = ["john", 1, false]; // union string | number | boolean

let myObj: object;
myObj = [];
console.log(typeof myObj); //object
myObj = bands;
myObj = {};

const exampleObj = {
  prop1: "Dave",
  prop2: true,
};

exampleObj.prop1 = "tien";
exampleObj.prop2 = false;

type Guitarist = {
  name?: string;
  active: boolean;
  albums: (string | number)[];
};
interface Guitarist2 {
  name: string;
  active?: boolean;
  albums: (string | number)[];
}

let evh: Guitarist = {
  name: "Eddite",
  active: false,
  albums: [1999, 2123, "Bieber"],
};
let evh2: Guitarist = {
  active: false,
  albums: [1999, 2123, "Bieber"],
};
const greetGuitarist = (guitarist: Guitarist) => {
  return `Hello ${guitarist.name?.toUpperCase}`; // if it have name property
};

console.log(greetGuitarist(evh));

enum Grade {
  U = 1,
  D = 2,
  C,
  B,
  A,
}
console.log(Grade.U);

export {};
