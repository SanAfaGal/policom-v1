import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

import Home from './pages/Home';
import AvailableRooms from './components/AvailableRooms'
import AvailableComputerRooms from './components/AvailableComputerRooms'
import ProtectedRoute from './components/ProtectedRoute';
import Clock from './components/Clock';

export default function App() {
  const { isAuthenticated } = useAuth0()

  return (
    <BrowserRouter>
      <Navigation />
      <Clock />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route element={<ProtectedRoute isAllowed={isAuthenticated} />} >
          <Route path="/booking-rooms" element={<AvailableRooms />} />
          <Route path="/booking-computers" element={<AvailableComputerRooms />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

function Navigation() {
  return (
    <nav>
      <ul>
        <li><Link to='/home'>Home</Link></li>
        <li><Link to='/booking-rooms'>Salas</Link></li>
        <li><Link to='/booking-computers'>Computadores</Link></li>
      </ul>
    </nav>
  )
}
