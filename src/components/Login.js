import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/actions/userActions';
import { setWatchlist } from '../redux/actions/watchlistActions';
import '../styles/Login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const dispatch = useDispatch();

  const handleLogin = (e) => {
    e.preventDefault();
    dispatch(setUser(email));
    localStorage.setItem('userEmail', email);
    setEmail('');
  };

  useEffect(() => {
    const storedEmail = localStorage.getItem('userEmail');
    if (storedEmail) {
      dispatch(setUser(storedEmail));
    }
  }, [dispatch]);

  return (
    <main className="main">
      <div className="form-container">
        <form onSubmit={handleLogin}>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <button type="submit">Login</button>
        </form>
      </div>
      <div className="login-message">
        <p>Please login to create a watchlist</p>
      </div>
    </main>
  );
};

export default Login;
