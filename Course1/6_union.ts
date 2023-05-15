let score: number | string | boolean = 33;

score = 44;

score = "hello";

score = true; 

type User = {
    name: string,
    id: number
};

type Admin = {
    username: string,
    id: number
};

let tien: User | Admin = { name: "Tien", id: 123 };
tien = { username: "tien", id: 123 };

function getDbID(id: number | string) {
    // id.toLowerCase() can't do this
    if (typeof id === "string") {
        id.toLowerCase();
    }
    //making some API calls
    console.log(`DB id is: ${id}`);
}

const data: (number | string | boolean)[] = [1, 2, 3, 4, "5", false];

const data2: any[] = [1, 2, 3, 4, "5", false];

let seatAllotment: "aisle" | "middle" | "window";

seatAllotment = "aisle";
seatAllotment = "middle";
// seatAllotment = "heh"; can't do this

getDbID(3)
getDbID("3")
export {}