"use client";
import { useState, useEffect } from "react";
type User = {
  id: number;
  firstName: string;
  email: string;
};
function UsersPage() {
  const [users, setUsers] = useState<User[]>([]);
  async function fetchUsers() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setUsers(data.users);
  }
  useEffect(() => {
    fetchUsers();
    console.log(users);
  }, []);
  return (
    <>
      <h1>Users Page</h1>
      <hr></hr>
      {users.map((user:User) => (
        <div key={user.id}>
          <h2>Name: {user.firstName}</h2>
          <p>Email: {user.email}</p>
          <hr></hr>
        </div>
      ))}
    </>
  );
}
export default UsersPage;
