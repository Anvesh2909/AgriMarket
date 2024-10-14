import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate(); // For navigation after login

  // Function to handle the login submission
  const handleLogin = (e) => {
    e.preventDefault();

    // Here you can add your authentication logic
    // For demonstration, we'll assume a simple condition for successful login
    if (email === 'user@example.com' && password === 'password') {
      // Redirect to home page or any other page after successful login
      navigate('/'); // Change the path as per your routing
      setError('');
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center bg-gray-100" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <h2 className="text-2xl font-bold text-center mb-4 text-gray-900">
           Login 
        </h2>
        <form onSubmit={handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="email">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700" htmlFor="password">
              Password:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded"
              required
            />
          </div>
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            type="submit"
            className="w-full py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
          >
            Login
          </button>
        </form>
        <p className="text-center mt-4 text-gray-900">
          Don't have an account?{' '}
          <a href="/register" className="text-blue-500 hover:underline">
            Register here
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
