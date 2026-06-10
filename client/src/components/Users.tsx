import { useState, useEffect } from "react";

type User = {
    id: number,
    firstName: string,
    lastName: string,
    email: string
}
function Users(){
    const [users, setUsers] = useState<User[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://dummyjson.com/usrs")
        .then((response) => response.json())
        .then((data) => {
            setUsers(data.users);
            setIsLoading(!isLoading);
            console.log("data: ", data);
        })
        .catch((err) => {
            console.log("error: ", err);
            setIsLoading(!isLoading);
            setError(err.message)
        })
    }, []);
    if(isLoading){
        return <h1>Users Data Loading...</h1>
    }
    if(error){
        return <h1>Error in Fetching the data</h1>
    }
    return (
        <>
        <h1>Users Data: </h1>
        {
            users.map((user) => (
                <div key={user.id}>
                    <h2>{user.firstName}</h2>
                    <h2>{user.lastName}</h2>
                    <p>{user.email}</p>
                </div>
            ))
        }
        </>
    )
}

export default Users;

// call dummyjson api using fetch
// store the api data in state variable using useState
// users, setUsers
// loading, setLoading -. to display the message loading
// error, SetError - if any error occurs, this error will handle it
// display all the users 

// useEffect -- updation stage
