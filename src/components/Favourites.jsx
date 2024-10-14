import React, { useState } from 'react';

const Favourites = () => {
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
          {/* Favourites content */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900">Your Favourites</h1>
          <p className="mt-4 text-gray-700">Here are your favorite items...</p>
          {/* Additional favourites details can go here */}
        </div>
      ) : (
        <div className="text-center">
          {/* Show login button if not logged in */}
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">Please log in to view your favourites</h1>
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

export default Favourites;
/*


<section id="reviews" className='w-full px-6 md:px-10 lg:px-20 py-10'>
        <div className='text-center mb-12'>
          <h2 className='text-4xl md:text-5xl font-bold leading-tight mb-4'>
            What Our <span className='text-green-500'>Customers</span> Say?
          </h2>
          <p className='text-md md:text-lg text-gray-600'>
            Hear genuine stories from our satisfied customers about their exceptional experiences with us.
          </p>
        </div>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-8'>
          {reviews.map((review, index) => (
            <div key={index} className='bg-green-100 p-6 rounded-lg shadow-md text-center'>
              <img
                src={review.image}
                alt={review.name}
                className='w-24 h-24 rounded-full mx-auto mb-4 border-2 border-green-500'
              />
              <h3 className='text-xl md:text-2xl font-semibold'>{review.name}</h3>
              <p className='text-gray-700 mt-2'>{review.reviewCustomer}</p>
              <div className='text-yellow-500 mt-4'>
                {'★'.repeat(Math.floor(review.rating))}
                {review.rating % 1 !== 0 && <span className='text-gray-400'>☆</span>}
              </div>
              <p className='text-gray-500 mt-1'>{review.rating.toFixed(1)} / 5.0</p>
            </div>
          ))}
        </div>
      </section>

*/