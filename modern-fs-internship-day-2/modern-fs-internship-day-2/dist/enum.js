"use strict";
// how to create a enum
Object.defineProperty(exports, "__esModule", { value: true });
// enum 
// for user 1 can access the user page
// for user 2 can access the admin page
var UserRole;
(function (UserRole) {
    UserRole["User"] = "USER";
    UserRole["Admin"] = "ADMIN";
})(UserRole || (UserRole = {}));
const user1 = {
    id: 1,
    name: "John Doe",
    role: UserRole.User,
    email: "john@gmail.com",
    isValid: true,
};
const user2 = {
    id: 2,
    name: "Jane Doe",
    role: UserRole.Admin,
    email: "jane@gmail.com",
    isValid: true,
};
function login(user) {
    console.log(`User ${user.name} logged in.`);
    if (user.role === UserRole.User) {
        console.log(`${user.name} has access to user page.`);
    }
    else {
        console.log(`${user.name} has access to admin page.`);
    }
}
login(user1);
login(user2);
