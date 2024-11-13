import React, { useEffect, useState } from "react";

const Users = () => {
    const [anotherState, setAnotherState] = useState(false)
    const [loadUsers, setLoadUsers] = useState(false)
    const [users, setUsers] = useState([{
        id: 1,
        name: 'User 1'
    },
    {
        id: 2,
        name: 'User 2'
    }])

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await res.json();
            setUsers(data);
        };
        fetchUsers();
        setLoadUsers(false);
    }, [loadUsers])

    useEffect(() => {
        console.log('Another useEffect')
    }, [])

    // fetchUsers();
    // setUsers([])

    return (
        <div>
            {anotherState ? "True" : "False"}
            <button onClick={() => setAnotherState(true)}>Update State!</button>
            <button onClick={() => setLoadUsers(true)}>Load Users!</button>
            {loadUsers ? "True" : "False"}
            <ul>
            {users.map((user, index) => (
                <li key={user.id}>{index+1}: {user.name}</li>
            ))}
            </ul>
        </div>
    );

}

export default Users;