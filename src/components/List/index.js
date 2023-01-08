import React, { useEffect, useState } from 'react'
import axios from 'axios'

const List = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        const url = 'https://jsonplaceholder.typicode.com/users'
        axios.get(url)
            .then(res => {
                console.log(res)
                setUsers(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    return (
        <>
            {
                users?.map(users => <p>{users.name}</p>)
            }
        </>
    )
}

export default List