import React, { useState } from 'react'
import { postData } from '../utils/post-data'

function UserRegisterForm() {

  const [userInput, setUserInput] = useState({
    firstName: '',
    lastName: '',
    dni: null,
    email: '',
    password: ''
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    try {
      const data = await postData('http://localhost:3000/users', userInput)

    } catch (error) {
      console.log();
      
    }
  }

  return (
  <>
    <form onSubmit={handleSubmit}>
    <label htmlFor="">
      Username or email
    </label>
    <input value={userInput.email} type="text"  placeholder='username or email'/>
    <label htmlFor="">
      Password
    </label>
    <input type="password" value={userInput.password} placeholder='password' />

    <button type='submit'>Login</button>
    </form>
  </>          

  )
}

export default UserRegisterForm