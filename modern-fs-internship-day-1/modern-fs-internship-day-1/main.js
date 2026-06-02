let name = "Prince";
console.log(name);

// let name = "Benjamin";
// console.log(name);
// SyntaxError: Identifier 'name' has already been declared



// ------------------------------------------------

var string1 = "Hello World";
console.log(string1);

var string1 = "Hello SECE";
console.log(string1);


// -------------------------------------------------

const PI = 3.14;
console.log(PI);

// PI = 3.14159; // TypeError: Assignment to constant variable.
// console.log(PI);


let nums = [1, 2, 3, 4, 5];
console.log(nums);
console.log(typeof nums); 

nums = "thirty";
console.log(nums);
console.log(typeof nums);

nums = true;
console.log(nums);
console.log(typeof nums);

nums = {
    name: "Prince",
    age: 19
}
console.log(nums);
console.log(typeof nums);

console.log();

console.log("The value of PI is: " + PI);
console.log();
console.log();
console.log();


// Funtion Declaration
// 1. Function Declaration
console.log("Function Declaration:");
function multiply(a,b){
    return a * b;
}
console.log(multiply(5, 3));


// in general use const or let instead of var for better scoping.
// 2. Function Expression
console.log("Function Expression:");
const multiply1 = function(a, b) {
    return a * b;
}
console.log(multiply1(5, 3));
console.log();

// 3. Arrow Function
console.log("Arrow Function:");
const multiply2 = (a, b) => a * b;
console.log(multiply2(5, 3));
console.log();

// (or)
console.log("Arrow Function with Block Body:");
const multiply3 = (a, b) => { 
    return a * b; 
}  
console.log(multiply3(5, 3));
console.log();


// 4.anonymous function
// console.log("Anonymous Function:");
// setTimeout(function() {
//     console.log("This is an anonymous function executed after 2 seconds.");
// }, 2000);

const ans1 = multiply(5, 3);
console.log("ans1: " + ans1);

const ans2 = multiply1(6, 3);
console.log("ans2: " + ans2);

const ans3 = multiply2(7, 3);
console.log("ans3: " + ans3);

const ans4 = multiply3(8, 3);
console.log("ans4: " + ans4);

let student = {
    name:"Raghu",
    age:19,
    hasGraduated:false,
    branch:"CSE"
}

console.log(student);
console.log(student.branch);
student.name = "Puvi";
console.log(student.name);

student = [1,2,3,4];
console.log(student);

let student1 = {
    name: "Prince",
    age: 19,
    isGraduated: false,
    address: {
        city: "Trichy",
        country: "India",
        pincode: "621307"
    },
    branch: "CSE",
    phone: "123-456-7890"   
}
console.log();
console.log(student1);
console.log(student1.name);
console.log(student1.address.city);
console.log();

student1.address = {
    city: "Trichy",
    country: "India",
};
console.log(student1.address);


student1.marks = [90, 85, 92];
console.log(student1.marks);

console.log(student1);

const arr = [1,2,3,4];
arr.push("hello");
console.log(arr);