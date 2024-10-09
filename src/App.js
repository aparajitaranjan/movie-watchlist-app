import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import Header from './components/Header';
import Login from './components/Login';
import MovieSearch from './components/MovieSearch/MovieSearch';
import MyWatchlist from './components/MyWatchlist';
import MovieDetail from './components/MovieSearch/MovieDetail';
import { useSelector } from 'react-redux';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const App = () => {
  const email = useSelector((state) => state.user.email);

  return (
    <Router>
      <div className="app-container">
        <Header />
        {email ? (
          <div className="layout">
            <aside className="sidebar">
              {/* <h2>WatchList</h2> */}
              <Link to="/home" className="home-button">
                <i className="fas fa-home"></i> Home
              </Link>
              <Link to="/watchlist" className="home-button">
                My Watchlist
              </Link>
            </aside>
            <main className="main-content">
              <Routes>
                <Route path="/home" element={<MovieSearch />} />
                <Route path="/watchlist" element={<MyWatchlist />} />
                <Route path="/movie/:id" element={<MovieDetail />} />
              </Routes>
            </main>
          </div>
        ) : (
          <Login />
        )}
      </div>
    </Router>
  );
};

export default App;
