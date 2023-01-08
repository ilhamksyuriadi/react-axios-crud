import React from 'react'
import './styles.css'

const Card = ({ name, userName, email }) => {

    const handleClickDelete = () => {
        console.log('delete button clicked')
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