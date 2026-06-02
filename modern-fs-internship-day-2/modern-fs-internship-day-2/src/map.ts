// map
// transform the array (to perform some kind of operation)
// return a new array

const nums = [1, 2, 3, 4, 5];
// task => double every element of the array
// using map to solve it
const newArray = nums.map((element, index, nums) => {
  console.log("index:", index);
  console.log(nums);
  return element * 2;
});

console.log("Original:", nums);
console.log("Modified:", newArray);

// task
const users = [
  {
    id: 1,
    firstName: "Emily",
    lastName: "Johnson",
    maidenName: "Smith",
    age: 29,
    gender: "female",
    email: "emily.johnson@x.dummyjson.com",
    phone: 819654313024,
  },
  {
    id: 2,
    firstName: "John",
    lastName: "Johnson",
    maidenName: "Smith",
    age: 29,
    gender: "female",
    email: "emily.johnson@x.dummyjson.com",
    phone: 819654313024,
  },
  {
    id: 3,
    firstName: "Jack",
    lastName: "Johnson",
    maidenName: "Smith",
    age: 17,
    gender: "female",
    email: "emily.johnson@x.dummyjson.com",
    phone: 819654313024,
  },
];

const firstName = users.map((i) => {
  return i.firstName;
});

console.log("Only first name:", firstName);
interface vote {
  canVote: string;
}

// const updatedUser = users.map((i) => {
//   let newUser: any = i;
//   newUser.canVote = "YES";
//   console.log(newUser);
//   return newUser;
// });

const updatedArr = users.map((user) => ({
  ...user,
  canvote: user.age >= 18 ? "VOTE" : "CANT_VOTE",
}));

console.log(updatedArr);
