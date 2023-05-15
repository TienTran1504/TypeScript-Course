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
