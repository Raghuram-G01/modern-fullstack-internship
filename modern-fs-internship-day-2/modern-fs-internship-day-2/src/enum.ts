// how to create a enum

// enum 
// for user 1 can access the user page
// for user 2 can access the admin page

enum UserRole {
    User = "USER",
    Admin = "ADMIN",
}

interface User{
    id: number,
    name: string,
    role: UserRole,
    email: string,
    isValid: boolean,
}

const user1: User = {
    id: 1,
    name: "John Doe",
    role: UserRole.User,
    email: "john@gmail.com",
    isValid: true,
}
const user2: User = {
    id: 2,
    name: "Jane Doe",
    role: UserRole.Admin,
    email: "jane@gmail.com",
    isValid: true,
}

function login(user: User): void {
    console.log(`User ${user.name} logged in.`);
    if(user.role === UserRole.User){
        console.log(`${user.name} has access to user page.`);
    }else{
        console.log(`${user.name} has access to admin page.`);
    }
}

login(user1);
login(user2);
