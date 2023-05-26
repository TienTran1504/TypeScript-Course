class CoderTest {
  name: string;
  age: number;
  music: string;
  lang: string;
  constructor(name: string, music: string, age: number, lang: string) {
    this.name = name;
    this.music = music;
    this.age = age;
    this.lang = lang;
  }
}

class Coder {
  secondLang!: string;
  constructor(
    public readonly name: string,
    public music: string,
    private age: number,
    protected lang: string = "Type script"
  ) {}
  public getAge() {
    return `Hello, I'm ${this.age}`;
  }
}

const Dave = new Coder("Dave", "Rock", 42);

console.log(Dave.getAge());
console.log(Dave.name);
console.log(Dave.music);

class WebDev extends Coder {
  constructor(
    public computer: string,
    name: string,
    music: string,
    age: number
  ) {
    super(name, music, age);
    this.computer = computer;
  }
  public getLang() {
    return `I write ${this.lang}`;
  }
  public getAgeTemp() {
    return `I'm ${this.getAge()}`;
  }
}

const Tien = new WebDev("Mac", "Tien", "POP", 25);
console.log(Tien.getLang());
console.log(Tien.getAgeTemp());

interface Musician {
  name: string;
  instrument: string;
  play(action: string): string;
}

class Guitarist implements Musician {
  name: string;
  instrument: string;
  constructor(name: string, instrument: string) {
    this.name = name;
    this.instrument = instrument;
  }
  play(action: string) {
    return `${this.name} ${action} the ${this.instrument}`;
  }
}

const Pale = new Guitarist("Jimmy", "guitar");
console.log(Pale.play("strums"));

class Peeps {
  static count: number = 0;
  static getCount(): number {
    return Peeps.count;
  }
  public id: number;
  constructor(public name: string) {
    this.name = name;
    this.id = ++Peeps.count;
  }
}

const John = new Peeps("John");
const Steve = new Peeps("Steve");
const Amy = new Peeps("Amy");

console.log(John.id); // 1
console.log(Steve.id); // 2
console.log(Amy.id); // 3
console.log(Peeps.count); // 3

class Bands {
  private dataState: string[];

  constructor() {
    this.dataState = [];
  }

  public get data(): string[] {
    return this.dataState;
  }
  public set data(value: string[]) {
    if (Array.isArray(value) && value.every((el) => typeof el === "string")) {
      this.dataState = value;
      return;
    } else throw new Error("Param is not an array of strings");
  }
}

const MyBands = new Bands();
MyBands.data = ["Neil Young", "Led Zep"]; // ['Neil Young', 'Led Zep']
console.log(MyBands.data);
MyBands.data = [...MyBands.data, "ZZ Top"]; //['Neil Young', 'Led Zep', 'ZZ Top']
console.log(MyBands.data);
// MyBands.data = ["Van halen", 123213];
