// call dummyjson api using fetch
// store the api data is state variable
// users,setUsers
// loading and setloading...
// error,setError - if any error occurs
// display all the users

import { useEffect, useState } from "react";
type User = {
  id: number;
  firstName: string;
  email: string;
};
function Users() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState(null);

  // use async and wait for the getUserData fn
  async function getUserData() {
    try {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      setUsers(data.users);
      setLoading(false);
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  }

  useEffect(() => {
    getUserData();
  }, []);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Error: {error}</h1>;
  }
  return (
    <div>
      <h1>Users</h1>
      {users.map((user) => (
        <div key={user.id}>
          <h2>{user.firstName}</h2>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default Users;
