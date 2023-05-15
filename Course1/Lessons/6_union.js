"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var score = 33;
score = 44;
score = "hello";
score = true;
var tien = { name: "Tien", id: 123 };
tien = { username: "tien", id: 123 };
function getDbID(id) {
    // id.toLowerCase() can't do this
    if (typeof id === "string") {
        id.toLowerCase();
    }
    //making some API calls
    console.log("DB id is: ".concat(id));
}
var data = [1, 2, 3, 4, "5", false];
var data2 = [1, 2, 3, 4, "5", false];
var seatAllotment;
seatAllotment = "aisle";
seatAllotment = "middle";
// seatAllotment = "heh"; can't do this
getDbID(3);
getDbID("3");
