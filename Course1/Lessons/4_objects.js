"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var User = {
    name: "Tien Tran",
    email: "tien@gmail.com",
    isActive: true
};
function createUser(_a) {
    var string = _a.name, boolean = _a.isPaid;
}
var newUser = { name: "Tien", isPaid: false };
// createUser({ name: "Tien", isPaid: false });
createUser(newUser);
function buyPerson() {
    return { name: "Tien Bieber", price: 1000000 };
}
function createCourse() {
    return { name: "React", price: 1000000 };
}
function createNewUser(user) {
}
createNewUser({ name: "", email: "", isActive: true });
var myUser = {
    _id: "1245",
    name: "Tien",
    email: "tien@123.com",
    isActive: false,
};
// myUser._id = 123; Can't change
myUser.name = "Nguyen Van a";
