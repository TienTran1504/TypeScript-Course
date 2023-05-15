"use strict";
console.log("typescript is here still");
// class User {
//     public email: string
//     name: string
//     readonly city: string = "HCM"
//     private middleName: string
//     constructor(email: string, name: string, middleName:string) {
//         this.email = email;
//         this.name = name;
//         this.middleName=middleName;
//     }
// }
class User {
    constructor(email, name, middleName) {
        this.email = email;
        this.name = name;
        this.middleName = middleName;
        this._courseCount = 1;
        this.city = "HCM";
        this.email = email;
        this.name = name;
        this.middleName = middleName;
    }
    deleteToken() {
        console.log("Token deleted");
    }
    get getAppleEmail() {
        return `apple${this.email}`;
    }
    get courseCount() {
        return this._courseCount;
    }
    set courseCount(courseNum) {
        if (courseNum) {
            throw new Error("Course count should be more than 1");
        }
        this._courseCount = courseNum;
    }
}
class SubUser extends User {
    constructor() {
        super(...arguments);
        this.isFamily = true;
    }
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const tien = new User("tien@gmail.com,", "tien", "tran");
// tien.city = "HCM"; can't use this because readonly
const newString = "1234";
