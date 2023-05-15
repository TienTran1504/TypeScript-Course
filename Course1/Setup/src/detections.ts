function detectType(val: number | string) {
    if (typeof val === "string") {
        return val.toLowerCase();
    } else { 
        return val + 3;        
    }
}

function provideId(id: string | null) {
    if (!id) {
        console.log("Please provide ID");
        return
    }
    id.toLowerCase();

}

function printAll(strs: string | string[] | null) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        } else if (typeof strs === "string") { 
            console.log(strs)
        }           
    }
}

interface User {
    name: string,
    email: string,

}

interface Admin {
    name: string,
    email: string,
    isAdmin: boolean
}

function isAdminAccount( account: User | Admin) {
    if ("isAdmin" in account) { // check if isAdmin property isAdmin exist in account
        return account.isAdmin;
    }


}


function logValue(x: Date | string) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}

type Fish = {
    swim() : void
}

type Bird = {
    fly: () => void
};

function isFish(pet: Fish | Bird): pet is Fish {
    return (pet as Fish).swim !== undefined; // true its a fish

}

function getFood(pet: Fish | Bird) {
    if (isFish(pet)) {
        pet;  // cursor show (parameter) pet: Fish)
        return "fish food"
    } else {
        pet; // cursor show (parameter) pet: Bird)
        return "bird food";
    }
}