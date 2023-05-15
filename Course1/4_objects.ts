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
export {}