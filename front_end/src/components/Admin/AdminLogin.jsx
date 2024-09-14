import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import AdminHome from './admin_home';
import { useAuth } from './AuthContext';

const AdminLogin = () => {
  const [adminId, setAdminId] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = (e) => {
    e.preventDefault();
    
    // Dummy admin credentials
    const adminCredentials = {
      id: 'admin',
      password: 'admin'
    };

    // Check if admin credentials match
    if (adminId === adminCredentials.id && password === adminCredentials.password) {
        login();
      navigate('/admin_home'); // Navigate to the admin side (AdminHome.jsx)
    } else {
      setError('Invalid Admin ID or Password');
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-200">
      <div className="w-full max-w-md p-10 space-y-6 bg-white shadow-2xl border-2 border-gray-300 rounded-lg">
        {/* Admin Login Title within the Block */}
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-6">Admin Login</h2>

        {/* Instructional Text */}
        <p className="text-gray-700 text-center mb-4">Please enter your admin ID and password below</p>

        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <form className="space-y-6" onSubmit={handleLogin}>
          <div>
            <label htmlFor="adminId" className="block text-gray-700 text-left">Admin ID</label>
            <input
              type="text"
              id="adminId"
              value={adminId}
              onChange={(e) => setAdminId(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your Admin ID"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-gray-700 text-left">Password</label>
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-2 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="showPassword"
              checked={showPassword}
              onChange={togglePasswordVisibility}
              className="mr-2"
            />
            <label htmlFor="showPassword" className="text-gray-700">Show Password</label>
          </div>

          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            Login
          </button>
        </form>

        {/* Powered by Pooja Infotech */}
        <p className="text-sm text-center text-gray-500 mt-6">
          Powered by <span className="font-semibold">Pooja Infotech</span>
        </p>
      </div>
    </div>
  );
};

export default AdminLogin;
