import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    setError('');

    try {
      const response = await axios.post('http://localhost:5000/api/auth/login', { email, password });

      if (response.data.token) {
        // Sauvegarder le token dans le localStorage ou un autre endroit sécurisé
        localStorage.setItem('token', response.data.token);
        navigate('/');
      } else {
        setError('Login failed. Please check your email and password.');
      }
    } catch (err) {
      setError('An error occurred during login. Please try again later.');
      console.error('Login error', err);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-md rounded px-8 pt-6 pb-8">
        <h2 className="text-2xl font-bold text-center mb-4">Login</h2>
        
        {error && <p className="text-red-500 text-center mb-4">{error}</p>}
        
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="********"
              required
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Login
            </button>
            <p className="text-blue-500 cursor-pointer hover:underline" onClick={() => navigate('/signup')}>
              Don't have an account? Sign up
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
