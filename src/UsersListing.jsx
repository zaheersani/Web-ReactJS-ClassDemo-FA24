import React, { useEffect, useState } from "react";
import { useParams, Link, NavLink, Outlet } from "react-router-dom";

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
        <>
            <div>
                {anotherState ? "True" : "False"}
                <button onClick={() => setAnotherState(true)}>Update State!</button>
                <button onClick={() => setLoadUsers(true)}>Load Users!</button>
                {loadUsers ? "True" : "False"}
                <ul>
                {users.map((user, index) => (
                    <NavLink to={`/users/${user.id}`} >
                    <li key={user.id}>{index+1}: {user.name}</li>
                    </NavLink>
                ))}
                </ul>
            </div>
            <Outlet />
        </>
    );

}


const UserDetails = () => {
    const { id } = useParams();
    const [user, setUser] = useState(null);

    console.log('User ID:', id)

    useEffect(() => {
        const fetchUsers = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
            const data = await res.json();
            setUser(data);
        };
        fetchUsers();
    }, [])

    console.log(user)

    if(!user) {
        return <div>Loading...</div>
    }

    return (
        <div>
            <h1>User Details</h1>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
        </div>
    )
}

export {UserDetails};
export default Users;