import React from 'react';
import img1 from '../assets/images/green1.webp';
import img2 from '../assets/images/white.webp';
import img3 from '../assets/images/devara.jpg';
import img4 from '../assets/images/thangam.jpg';
import potato from '../assets/images/potato.webp';
import tomato from '../assets/images/tomato.webp';
import carrot from '../assets/images/carrot.webp';
import { Link } from 'react-router-dom';
import bg from '../assets/images/bg.png';
const reviews = [
  {
    image: img3,
    name: 'Devara',
    reviewCustomer: 'The tools and seeds I bought from AgriMarket have transformed my farm!',
    rating: 4.9,
  },
  {
    image: img4,
    name: 'Thangam',
    reviewCustomer: 'Great customer service and high-quality products. Highly recommended!',
    rating: 4.4,
  },
];

const products = [
  {
    image: img1,
    name: 'Capsicum',
    price: 20,
  },
  {
    image: img2,
    name: 'Cauliflower',
    price: 30,
  },
  {
    image: tomato, 
    name: 'Tomato',
    price: 25,
  },
  {
    image: potato, 
    name: 'Potato',
    price: 15,
  },
  {
    image: carrot, 
    name: 'Carrot',
    price: 22,
  },
];

const Home = () => {
  return (
    <div className="w-full min-h-screen" style={{ fontFamily: 'Montserrat, sans-serif' }}>
<section
  id="home"
  className="relative flex items-center justify-center h-screen"
>
  {/* Green overlay */}
  <div className="absolute inset-0"></div>

  {/* Content over the background */}
  <div className="relative text-center z-10">
    <h1 className="text-4xl font-bold text-black">Welcome to AgriMarket</h1>
    <p className="mt-4 text-black-200">
      Personalized solutions for farmers. Discover agricultural tools, seeds, and much more tailored to your land.
    </p>
    <Link to="/products">
      <button className="mt-6 px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
        Explore Products
      </button>
    </Link>
  </div>
</section>


      {/* Products Section */}
      <section id="products" className="py-16 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Our Products</h2>
          <p className="mt-2 text-gray-600">Find the best tools, seeds, and more for your farm.</p>
        </div>

        <div className="mt-10 flex justify-center gap-8 flex-wrap">
          {products.map((product, index) => (
            <div key={index} className="w-60 p-4 bg-gray-50 rounded shadow-md">
              <img src={product.image} alt={product.name} className="w-full rounded" />
              <h3 className="mt-4 text-lg font-semibold text-gray-900">{product.name}</h3>
              <p className="text-green-500 font-bold">₹{product.price}</p>
              <button className="mt-2 px-4 py-1 bg-green-500 text-white rounded hover:bg-green-600 transition">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Reviews Section */}
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

      {/* Chatbot Section */}
      <section id="contact" className="py-16 bg-white">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Need Assistance?</h2>
          <p className="mt-2 text-gray-600">Our chatbot is here to help with your inquiries and product recommendations.</p>
        </div>

        <div className="mt-6 flex justify-center">
          <button className="px-6 py-2 bg-green-500 text-white rounded hover:bg-green-600 transition">
            Chat with Us
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;