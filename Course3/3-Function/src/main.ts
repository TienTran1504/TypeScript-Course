const add = (a: number, b: number): number => {
  return a + b;
};

const logMsg = (message: any): void => {
  console.log(message);
};

logMsg("Hello!");
logMsg(add(2, 3));
let subtract = function (a: number, b: number): number {
  return a - b;
};

type mathFunction = (a: number, b: number) => number;

interface mathFunction2 {
  (a: number, b: number): number;
}

let multiply: mathFunction = function (c, d) {
  return c * d;
};
let divide: mathFunction = (c, d) => {
  return c / d;
};

const addAll = (a: number, b: number, c?: number): number => {
  if (typeof c !== "undefined") {
    return a + b + c;
  }
  return a + b;
};
const sumAll = (a: number, b: number, c: number = 2): number => {
  return a + b + c;
};
// Rest Parameters;
const total = (a: number, ...nums: number[]): number => {
  return a + nums.reduce((prev, curr) => prev + curr);
};

logMsg(total(1, 2, 3, 4)); // 10

//use never type if have infinite or error
const createError = (errMsg: string): never => {
  throw new Error(errMsg);
};

const infinite = () => {
  let i: number = 1;
  while (true) {
    i++;
  }
};

const isNumber = (value: any): boolean => {
  return typeof value === "number" ? true : false;
};

const numberOrString = (value: number | string): string => {
  if (typeof value === "string") return "string";
  if (isNumber(value)) return "number";
  return createError("this should never happen!");
};
export {};
