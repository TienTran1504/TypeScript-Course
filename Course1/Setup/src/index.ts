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

    protected _courseCount = 1;

    readonly city: string = "HCM"
    constructor(public email: string, public name: string, private middleName:string) {
        this.email = email;
        this.name = name;
        this.middleName=middleName;

    }
    private deleteToken() {
        console.log("Token deleted");
    }

    get getAppleEmail(): string {
        return `apple${this.email}`;
    }

    get courseCount(): number{
        return this._courseCount;
    }
    set courseCount(courseNum){
        if (courseNum) {
            throw new Error("Course count should be more than 1")
        }
        this._courseCount = courseNum;
    }
}


class SubUser extends User{
    isFamily: boolean = true;
    changeCourseCount() {
        this._courseCount = 4;
    }
}
const tien = new User("tien@gmail.com,", "tien", "tran");
// tien.city = "HCM"; can't use this because readonly
const newString = "1234";