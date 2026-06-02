"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
const output = add(5, 10);
console.log("Output:", output);
function add1(a, b) {
    return a + b;
}
const output1 = add1(5, "10");
console.log("Output:", output1);
let balance = 100;
const depositMoney = (amount) => {
    balance += amount;
    return balance;
};
console.log(depositMoney(50));
const withdrawMoney = function (amount) {
    if (amount > balance) {
        console.log("Insufficient balance");
        return balance;
    }
    else {
        balance -= amount;
        console.log("Amount withdrawn: ", amount);
        console.log("Balance after withdrawal: ", balance);
        return balance;
    }
};
withdrawMoney(30);
function printText() {
    console.log("Hello SECE");
}
printText();
let firstName = "Prince";
let lastName = "Benjmain K";
let fullName = `${firstName} ${lastName}`;
console.log(`${fullName} welcome to the class`);
// console.log(`${firstName} ${lastName}`);
let obj = {
    name: "Prince",
    age: 19,
};
// obj = 10;
console.log(obj);
const student1 = {
    name: "Alice",
    age: 20,
    marks: [85, 90, 78],
    isPassed: true,
};
const student2 = {
    name: "Bob",
    age: 22,
    marks: [92, 88, 95],
    isPassed: true,
};
const student3 = {
    name: "Charlie",
    age: 19,
    marks: [70, 75, 80],
    isPassed: false,
};
console.log(student1, student2, student3);
// ? is used to make the property optional
// object creation using type alias
const s4 = {
    name: "David",
    age: 21,
    marks: [88, 90, 92],
    isPassed: true, //if we comment this line then it will give error because isPassed is required property in student type (when ? is not used)
};
console.log("student 4 details:", s4);
const emp1 = {
    name: "Raghu",
    department: "IT",
    employeeId: 12345,
    isPromoted: true,
    salary: 50000,
};
console.log("Employee 1 details:", emp1);
const car1 = {
    brand: "Tesla",
    model: "Model S",
    price: 80000,
    color: "Red",
    topSpeed: 200,
    isElectric: true,
};
console.log("Car 1 details:", car1);
const doctor1 = {
    name: "Dr. Smith",
    specialization: "Cardiology",
    experience: 15,
    isAvailable: true,
};
console.log("Doctor 1 details:", doctor1);
const array = ["Mohan", 20];
array.push("Hello");
array.push(30);
// array.push(true);
console.log("array: ", array);
