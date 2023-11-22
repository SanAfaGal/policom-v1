import './App.css'
import React from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Home from './pages/Home';
import AvailableRooms from './components/AvailableRooms';
import AvailableComputerRooms from './components/AvailableComputerRooms';
import ProtectedRoute from './components/ProtectedRoute';
import Clock from './components/Clock';

export default function App() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="app">
      <BrowserRouter>
        <Navigation isAuthenticated={isAuthenticated} />
        <div className="clock">
          <Clock />
        </div>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          {isAuthenticated ? (
            <Route element={<ProtectedRoute isAllowed={isAuthenticated} />}>
              <Route path="/booking-rooms" element={<AvailableRooms />} />
              <Route path="/booking-computers" element={<AvailableComputerRooms />} />
            </Route>
          ) : null}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

function Navigation({ isAuthenticated }) {
  return (
    <nav className="navigation">
      <ul>
        {!isAuthenticated ? (
          <li>
          </li>
        ) : (
          <>
            <li><Link to='/home'>Home</Link></li>
            <li><Link to='/booking-rooms'>Salas</Link></li>
            <li><Link to='/booking-computers'>Computadores</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
}
