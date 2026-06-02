const nums = [1,2,3,4,5,6,7,8,9,10];
// let accumulator = 0;
const result = nums.reduce((accumulator,element) => {
    return accumulator+element;
},0)
console.log(result);