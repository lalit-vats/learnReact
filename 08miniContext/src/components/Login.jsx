import React, { useState, useContext } from 'react'
import UserContext from '../context/UserContext'

const Login = () => {
  const [username, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const {setUser} = useContext(UserContext);

  const handleSubmit = (e) =>{
    console.log(e,'valueeee')

        e.preventDefault()
        setUser({username, password})
        console.log(username,'valueeee')
  }

    return (
        <div>
            <h2>Login</h2>
            <input 
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            type='text' 
            placeholder='UserName'/>
            <br/>
            <br/>

            <div >
            <input 
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type='password' 
            placeholder='Password' />
            </div>
            <br/>
            <br/>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default Login