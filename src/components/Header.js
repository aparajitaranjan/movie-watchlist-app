import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../redux/actions/userActions';
import '../styles/Header.css';

const Header = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.user.email);

  const handleLogout = () => {
    dispatch(logOut());
    localStorage.removeItem('userEmail');
  };

  return (
    <header>
      <h1 className="header-title">Movie Watchlist App</h1>
      {email ? (
        <div className="header-welcome">
          <p>Welcome, {email}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : null}
    </header>
  );
};

export default Header;
