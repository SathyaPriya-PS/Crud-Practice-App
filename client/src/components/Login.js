import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Login.css';
function Login() {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const navigate = useNavigate();

  const login = async () => {
  if (!username || !password) {
    alert('Please enter both username and password');
    return;
  }

  try {
    await axios.post('http://localhost:5000/api/login', { username, password });
    navigate('/dashboard');
  } catch (err) {
    alert('Login failed');
  }
};


  return (
  <div className="login-container">
    <div className="login-box">
      <h2>Login</h2>
      <input placeholder="Username" onChange={e => setUser(e.target.value)} />
      <input placeholder="Password" type="password" onChange={e => setPass(e.target.value)} />
      <button onClick={login}>Login</button>
    </div>
  </div>
);

}
export default Login;
