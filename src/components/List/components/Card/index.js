import React from 'react'
import axios from 'axios'
import './styles.css'

const Card = ({ id, name, userName, email }) => {

    const handleClickDelete = () => {
        console.log('delete button clicked')
        const url = `https://jsonplaceholder.typicode.com/users/${id}`
        axios.delete(url)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    return (
        <div className='card'>
            <div className='data-container'>
                <p><b>Name:</b> {name}</p>
                <p><b>Username:</b> {userName}</p>
                <p><b>Email:</b> {email}</p>
            </div>
            <div className='button-container'>
                <button type='button' onClick={handleClickDelete}>Delete</button>
            </div>
        </div>
    )
}

export default Card