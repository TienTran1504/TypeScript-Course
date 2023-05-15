"use strict";
function detectType(val) {
    if (typeof val === "string") {
        return val.toLowerCase();
    }
    else {
        return val + 3;
    }
}
function provideId(id) {
    if (!id) {
        console.log("Please provide ID");
        return;
    }
    id.toLowerCase();
}
function printAll(strs) {
    if (strs) {
        if (typeof strs === "object") {
            for (const s of strs) {
                console.log(s);
            }
        }
        else if (typeof strs === "string") {
            console.log(strs);
        }
    }
}
function isAdminAccount(account) {
    if ("isAdmin" in account) { // check if isAdmin property isAdmin exist in account
        return account.isAdmin;
    }
}
function logValue(x) {
    if (x instanceof Date) {
        console.log(x.toUTCString());
    }
    else {
        console.log(x.toUpperCase());
    }
}
function isFish(pet) {
    return pet.swim !== undefined; // true its a fish
}
function getFood(pet) {
    if (isFish(pet)) {
        pet; // cursor show (parameter) pet: Fish)
        return "fish food";
    }
    else {
        pet; // cursor show (parameter) pet: Bird)
        return "bird food";
    }
}
function getTrueShape(shape) {
    if (shape.kind === "circle") {
        return Math.PI * shape.radius ** 2;
    }
    else if (shape.kind === "square") {
        return shape.size * shape.size;
    }
    else {
        return shape.length * shape.width;
    }
}
function getArea(shape) {
    switch (shape.kind) {
        case "circle":
            return Math.PI * shape.radius ** 2;
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.length * shape.width;
        default:
            const _defaultforShape = shape;
            return _defaultforShape;
    }
}
