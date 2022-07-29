import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { postData } from './utils/post-data';

function App() {

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    console.log({email, password});
  
    try {
      const data = await postData('http://localhost:3000/signup', {email, password})
    
      console.log(data.token);   
      
    } catch (error) {
      console.log();
      
    }
  }

  return (
    <div className="App">
      <header className="App-header">
        
        <form onSubmit={handleSubmit}>
          <label htmlFor="">
            Username or email
          </label>
          <input value={email} type="text" onChange={ e => setEmail(e.target.value)} placeholder='username or email'/>
          <label htmlFor="">
            Password
          </label>
          <input type="password" value={password} placeholder='password' onChange={ e => setPassword(e.target.value)}/>

          <button type='submit'>Login</button>
        </form>


      </header>
    </div>
  );
}

export default App;
