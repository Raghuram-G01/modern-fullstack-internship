"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const nums = [1, 2, 3, 4, 5];
const first = nums[0];
const second = nums[1];
const third = nums[2];
console.log("First 3 elements are:");
console.log(first, second, third);
// array destructuring
const [f, s, t] = nums;
console.log(f, s, t);
// skipping elements
const [firstElement, , , , fifthElement] = nums;
console.log(firstElement, fifthElement);
// object destructuring
var VoteStatus;
(function (VoteStatus) {
    VoteStatus["canVote"] = "ELIGIBLE";
    VoteStatus["notEligible"] = "NOT ELIGIBLE";
})(VoteStatus || (VoteStatus = {}));
const user = {
    name: "Prince",
    age: 19,
    isEligibleToVote: VoteStatus.canVote
};
const userName = user.name;
const userAge = user.age;
console.log(`User name is ${userName} and the vote status is ${user.isEligibleToVote.toLowerCase()}`);
