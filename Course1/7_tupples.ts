// const user: (string | number)[] = [1, "hc"];

let tUser: [string, number, boolean]; // specific order

tUser = ["hc", 131, true] 

let rgb: [number, number, number] = [255, 133, 123];
rgb.push(123);

type User = [number, string];

const newUser: User = [112, "example@gmail.com"];

newUser[1] = "hc.com";
newUser.push(123); // can still use
export{}