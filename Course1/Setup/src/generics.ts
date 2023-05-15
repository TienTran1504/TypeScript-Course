const score: Array<number> = [];
const names: Array<string> = [];

function identityOne(val: boolean | number ): boolean | number {
    return val;
}

function identityTwo(val: any): any{
    return val;
}

// same as any but when input a number it must  return number, 'any' it can return any type and dont have to return
function identityThree<Type>(val: Type): Type {
    return val;
}
identityThree(true);


function identityFour<T>(val: T): T{ // any alphabet
    return val;
}

interface Bootle{
    brand: string,
    type: number,
}
class SubBottle implements Bootle{
    constructor(public brand: string, public type: number) {
        
    }
}
let subBottle = new SubBottle("abc", 1234);
identityFour<Bootle>({ brand: "abc", type: 123 });
identityFour<Bootle>(subBottle);


function getSearchProducts2<T>(products: T[]): T[] {
    return products;
}
function getSearchProducts<T extends number>(products: T[]): T {
    const myIndex = 3;
    return products[myIndex];
}

const getMoreSearchProducts = <T>(products: T[]): T => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
}

interface Database {
    connection: string,
    username: string,
    password: string,
}



function anotherFunction<T, U extends Database>(valOne:T,valTwo: U): object{
    return {
        valOne,
        valTwo,
    }
}

anotherFunction(4, { connection: "123", username: "123", password: "!23" });

interface Quiz {
    name: string,
    type: string,
}

interface Course{
    name: string,
    author: string,
    subject: string,
}

// T is Generics
class Sellable<T>{
    public cart: T[] = [];
    
    addToCart(product: T) {
        this.cart.push(product);
    }
}