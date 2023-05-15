"use strict";
const score = [];
const names = [];
function identityOne(val) {
    return val;
}
function identityTwo(val) {
    return val;
}
// same as any but when input a number it must  return number, 'any' it can return any type and dont have to return
function identityThree(val) {
    return val;
}
identityThree(true);
function identityFour(val) {
    return val;
}
class SubBottle {
    constructor(brand, type) {
        this.brand = brand;
        this.type = type;
    }
}
let subBottle = new SubBottle("abc", 1234);
identityFour({ brand: "abc", type: 123 });
identityFour(subBottle);
function getSearchProducts2(products) {
    return products;
}
function getSearchProducts(products) {
    const myIndex = 3;
    return products[myIndex];
}
const getMoreSearchProducts = (products) => {
    // do some database operations
    const myIndex = 4;
    return products[myIndex];
};
function anotherFunction(valOne, valTwo) {
    return {
        valOne,
        valTwo,
    };
}
anotherFunction(4, { connection: "123", username: "123", password: "!23" });
// T is Generics
class Sellable {
    constructor() {
        this.cart = [];
    }
    addToCart(product) {
        this.cart.push(product);
    }
}
