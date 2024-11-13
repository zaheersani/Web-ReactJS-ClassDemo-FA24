import React, { useEffect, useState } from "react";

const Users = () => {

    const [update, setUpdate] = useState(false)
    const [reload, setReload] = useState(false)
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

        setReload(false);
    }, [reload, update])

    const fetchUsers = async () => {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        setUsers(data);
    };

    // fetchUsers();
    // setUsers([])


    return (
    <div>
        {update ? "State Updated" : "State Not Updated"}
        <button onClick={() => setUpdate(true)}>Update State</button>
        <button onClick={() => setReload(true)}>Reload!</button>
        {reload ? "Reloading" : "Not Reloading"}
        <ul>
        {users.map(user => (
            <li key={user.id}>{user.name}</li>
        ))}
        </ul>
    </div>
    );

}

export default Users;