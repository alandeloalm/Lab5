import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export const Login = () => {
    const [username, setUsername] = useState('');
    const navigate = useNavigate();

    const OnLogin = () => {
        navigate('/Perfil');
    }
  return (
    <div>
      <h2>Login Page</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <button onClick={OnLogin}>Login</button>
    </div>
  )
}
