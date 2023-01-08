import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './components/Card'
import './styles.css'

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
        <div className='list'>
            {
                users?.map((user, index) => <Card key={index} id={user.id} name={user.name} userName={user.username} email={user.email} />)
            }
        </div>
    )
}

export default List