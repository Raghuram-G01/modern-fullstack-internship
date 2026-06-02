let name = "Prince";
console.log(name);

let age: number = 30;
console.log(age);

let isStudent: boolean = true;
console.log(isStudent);


// age = "hello";
// console.log(age);


let contact: string = "123-456-7890";
console.log(contact);

let rollNumber: number = 101;
console.log("rollNumber: ",rollNumber);


let flag: boolean = false;
console.log("flag: ",flag);

let arr : number[] = [1, 2, 3, 4, 5];
console.log("arr: ", arr);

// arr.push(6);
// console.log("arr after push: ", arr);

// arr.push("Hello");
// console.log("arr after push string: ", arr);

const city : string[] = ["New York", "Los Angeles", "Chicago"];
console.log("city: ", city);

console.log(city[0]);
console.log(city[1]);
console.log(city[2]);

const flag1 : boolean[] = [true, false, true];
console.log("flag1: ", flag1);

const matrix: number[][] = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log("matrix: ", matrix);

let colors : readonly string[] = ["red", "green", "blue"];
console.log("colors: ", colors);
// colors.push("yellow");

let age1: any = 10;
console.log("age1: ", age1);

age1 = "Hello";
console.log("age1 after change: ", age1);

age1 = true;
console.log("age1 after change: ", age1);

age1 = [1, 2, 3];
console.log("age1 after change: ", age1);

age1 = ["red", "green", "blue"];
console.log("age1 after change: ", age1);


age1 = ["Prince",19,"Trichy",{
    address:{
        city:"Trichy",
        state:"Tamil Nadu",
        country:"India"
    }
}]
console.log("age1 after change: ", age1);

let str1 = "Hello";
console.log("str1: ", str1);

console.log("Uppercase",str1.toUpperCase());
console.log("Lowercase: ", str1.toLowerCase());

let data : any = 18;
// console.log("data: ", data.toUpperCase());

const myarr : any[] = [1, "Hello", true, [1, 2, 3], { name: "Prince" }];
console.log("myarr: ", myarr);

let myarr1 = [1,2,3,4];
// myarr1.push("hello");




