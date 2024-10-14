import React, { useState } from 'react';

const Orders = () => {
  // State to track if user is logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Function to handle login action
  const handleLogin = () => {
    // Simulate a successful login
    setIsLoggedIn(true);
  };

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-gray-100" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      {isLoggedIn ? (
        <div className="text-center">
          {/* Orders content */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Orders</h1>
          <p className="mt-4 text-gray-700">Here are your recent orders...</p>
          {/* Additional orders details can go here */}
        </div>
      ) : (
        <div className="text-center">
          {/* Show login button if not logged in */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Please log in to view your orders</h1>
          <button
            className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition"
            onClick={handleLogin}
          >
            Login
          </button>
        </div>
      )}
    </div>
  );
};
export default Orders;