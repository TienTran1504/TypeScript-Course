const User = {
    name: "Tien Tran",
    email: "tien@gmail.com",
    isActive: true
};

function createUser({name: string, isPaid: boolean}) {
    
}

let newUser = { name: "Tien", isPaid: false };
// createUser({ name: "Tien", isPaid: false });
createUser(newUser);

function buyPerson(): {name: string, price: number} { // :{} return type object
    

    return { name: "Tien Bieber", price: 1000000 };
}

function createCourse(): {}{
    return { name: "React", price: 1000000 };

}


type User = {
    name: string,
    email: string,
    isActive: boolean
}

type myString = string;
function createNewUser(user: User) {
    
}

createNewUser({ name: "", email: "", isActive: true });

type newUser = {
    readonly _id : string,
    name: string,
    email: string,
    isActive: boolean,
    creditCardDetails?: number, //optional
}


let myUser: newUser = {
    _id: "1245",
    name: "Tien",
    email: "tien@123.com",
    isActive: false,
}

// myUser._id = 123; Can't change
myUser.name = "Nguyen Van a";

type cardNumber = {
    cardNumber: string,

}

type cardDate = {
    cardDate: string,
}

type cardDetails = cardNumber & cardDate &{
    cvv: number
} // combine 3 object


export { }