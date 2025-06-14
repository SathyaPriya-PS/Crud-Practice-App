import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './Signup.css'; // Custom styles

function Signup() {
  const [username, setUser] = useState('');
  const [password, setPass] = useState('');
  const navigate = useNavigate();

  const signup = async () => {
    try {
      await axios.post('http://localhost:5000/api/signup', { username, password });
      alert('Signup successful!');
      navigate('/login');
    } catch (err) {
      alert('Signup failed: Username might already exist.');
    }
  };
  
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Signup</h2>
        <input
          placeholder="Username"
          value={username}
          onChange={e => setUser(e.target.value)}
        />
        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={e => setPass(e.target.value)}
        />
        <button onClick={signup}>Signup</button>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Signup;
