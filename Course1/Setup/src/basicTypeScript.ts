let someProp: any; 
let newName: string;
let age: number | string;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

// let printName: Function; or
let printName: (name: string) => void; //return void type, void return undefined
let printName2: (name: string) => never; //never return nothing



role = [5, "Tine"];

// function printName(name: string) {
//   console.log(name);
// }
// printName("Tien");


// let person: Object; not suggest to use

type Person = {
  name: string;
  age?: number; // optional
};

let person: Person = {
  name: "Tien",
  age:21,
}

let lotsOfPeople: Person[];

let personName: unknown;


interface Person2 {
  name: string;
  age?: number;
}
interface Guy extends Person2{
  profession: string;
}

type X = {
  a: string;
  b: number;
}
type Y = X & {
  c: string;
  d: number;
}
let y: Y = {
  a: "a",
  b: 123,
  c: "123",
  d: 1234
}
