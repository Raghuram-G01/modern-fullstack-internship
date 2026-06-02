"use client";
// Fetch and display users (name)
import { useEffect, useState } from "react";
import Link from "next/link";

type User = {
  id: number;
  firstName: string;
  lastName: string;
};

function Users() {
  const [users, setUsers] = useState<User[]>([]);
  async function getUserData() {
    const res = await fetch("https://dummyjson.com/users");
    const data = await res.json();
    setUsers(data.users);
  }

  useEffect(() => {
    getUserData();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>
            {user.id}.{" "}
            <Link href={`/client/users/${user.id}`}>
              {user.firstName} {user.lastName}
            </Link>
          </h2>
        </div>
      ))}
    </div>
  );
}
export default Users;
