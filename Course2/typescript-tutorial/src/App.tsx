import React from 'react';
import './App.css';

let name: string;
let age: number;
let isStudent: boolean;
let hobbies: string[];
let role: [number, string];

role = [5, "Tine"];

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

function App() {
  return (
    <div className="App">
     Hello world
    </div>
  );
}

export default App;
