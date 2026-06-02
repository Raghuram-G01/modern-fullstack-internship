"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function generic(value) {
    console.log(value);
    return value;
}
generic("Hello");
generic(2345);
function isgreater(a, b) {
    return a > b;
}
console.log(isgreater(4, 5));
// try to create a function(arr)
function getElement(arr) {
    return arr;
}
let arr = [1, 2, 3, 4, 5];
console.log(getElement(arr));
const str = ["Prince", "Raghuram"];
console.log(getElement(str));
