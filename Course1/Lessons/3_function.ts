let hero: string;

function getHero() {
    return "Super Man";
}

hero = getHero();

function addTwo(num: number) : number { // must return number
    return num + 2;
}

addTwo(5);

function getUpper(val: string) {
    return val.toUpperCase();
}

getUpper("hi how are you");

function signUpUser(name: string, email: string, isPaid: boolean) {
    
}

let loginUser = (name: string, email: string, isPaid: boolean = false) => {
    
}

signUpUser("tien", "tien@gmail.com", false);
loginUser("tien", "tien@gmail.com");


function getValue(myVal: number){
    if (myVal > 5) {
        return true
    }
    return "Smaller than 5";
}

const getHello = (s:string): string => {
    return "Hello";
}

const heros = ["thor", "spiderman", "ironman"];

heros.map((hero: string) => {
    console.log( `hero is ${hero}`);
})

function consoleError(errmsg: string): void{
    console.log(errmsg);
}

function handleError(errmsg: string): never{
    console.log(errmsg);
    throw new Error(errmsg); // must have
}



export {}