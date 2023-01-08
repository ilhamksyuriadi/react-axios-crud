import React, { useState } from 'react'
import axios from 'axios'
import './styles.css'

const AddForm = () => {
  const [name, setName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')

  const handleChangeName = (e) => {
    setName(e.target.value)
  }

  const handleChangeUserName = (e) => {
    setUserName(e.target.value)
  }

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    const url = 'https://jsonplaceholder.typicode.com/users'
    const userData = {
      name: name,
      username: userName,
      email: email
    }
    axios.post(url, userData)
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <h1>Add New User</h1>
      <input placeholder="Name" type="text" value={name} onChange={handleChangeName} />
      <input placeholder="Username" type="text"  value={userName} onChange={handleChangeUserName} />
      <input placeholder="Email" type="text" value={email} onChange={handleChangeEmail} />
      <button type='submit'>Add User</button>
    </form>
  )
}

export default AddForm