// in client side we were using useEffect ans useState to store the data and request the data
// in server side component we can request without useSate ans useEffect

async function getAllUsers() {
  const res = await fetch("https://dummyjson.com/users");
  const data = await res.json();
  return data.users;
}

async function UsersPage() {
  const users = await getAllUsers();
  return (
    <div>
      <h1>Server Users</h1>
      {users.map((user: any) => (
        <p key={user.id}>
          {user.id}. {user.firstName} {user.lastName}
        </p>
      ))}
    </div>
  );
}

export default UsersPage;
