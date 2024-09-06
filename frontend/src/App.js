import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import TicketListPage from './pages/TicketListPage';
import AddTicket from './pages/AddTicket';
import LoginPage from './components/Login';
import SignupPage from './components/Signup';
import ProtectedRoute from './components/ProtectedRoute';

const App = () => {
  return (
    <Router>
      <div className="container mx-auto p-4">
        <header className="bg-blue-500 text-white py-4 mb-6">
          <nav className="container mx-auto flex justify-between items-center">
            <h1 className="text-2xl font-bold">
              <Link to="/">Amazoon Store</Link>
            </h1>
            <ul className="flex space-x-4">
              <li>
                <Link to="/" className="hover:underline">
                  Page d'acceuil
                </Link>
              </li>
              <li>
                <Link to="/add-ticket" className="hover:underline">
                  Ajouter un ticket
                </Link>
              </li>
              <li>
                <Link to="/ticket-list" className="hover:underline">
                  Liste des tickets
                </Link>
              </li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="/add-ticket" element={<ProtectedRoute element={<AddTicket />} />} />
          <Route path="/ticket-list" element={<ProtectedRoute element={<TicketListPage />} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
