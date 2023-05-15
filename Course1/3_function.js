"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var hero;
function getHero() {
    return "Super Man";
}
hero = getHero();
function addTwo(num) {
    return num + 2;
}
addTwo(5);
function getUpper(val) {
    return val.toUpperCase();
}
getUpper("hi how are you");
function signUpUser(name, email, isPaid) {
}
var loginUser = function (name, email, isPaid) {
    if (isPaid === void 0) { isPaid = false; }
};
signUpUser("tien", "tien@gmail.com", false);
loginUser("tien", "tien@gmail.com");
function getValue(myVal) {
    if (myVal > 5) {
        return true;
    }
    return "Smaller than 5";
}
var getHello = function (s) {
    return "Hello";
};
var heros = ["thor", "spiderman", "ironman"];
heros.map(function (hero) {
    console.log("hero is ".concat(hero));
});
function consoleError(errmsg) {
    console.log(errmsg);
}
function handleError(errmsg) {
    console.log(errmsg);
    throw new Error(errmsg); // must have
}
