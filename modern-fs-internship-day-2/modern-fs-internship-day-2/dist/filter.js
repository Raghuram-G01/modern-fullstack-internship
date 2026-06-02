"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArray = nums.filter(i => {
    return i % 2 !== 1;
});
console.log(newArray);
const arr = [
    {
        name: "nishanth",
        age: 22,
    },
    {
        name: "nisanthu",
        age: 25,
    },
    {
        name: "Prince",
        age: 14,
    }
];
const updatedArr = arr.filter(user => user.age >= 18);
console.log(updatedArr);
