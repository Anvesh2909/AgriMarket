import React, { useState } from 'react';
import img1 from '../assets/images/apple.webp';
import img2 from '../assets/images/carrot.webp';
import img3 from '../assets/images/wheat.webp';
import img4 from '../assets/images/milk.webp';

const Products = () => {
  const products = [
    { id: 1, name: 'Fresh Apples', category: 'Fruits', price: '₹200.99 / kg', image: img1 },
    { id: 2, name: 'Organic Carrots', category: 'Vegetables', price: '₹50.50 / kg', image: img2 },
    { id: 3, name: 'Whole Wheat', category: 'Grains', price: '₹30.90 / kg', image: img3 },
    { id: 4, name: 'Dairy Milk', category: 'Dairy', price: '₹40.20 / liter', image: img4 },
  ];

  const [cart, setCart] = useState(products.map(product => ({ ...product, quantity: 0 })));
  const [searchQuery, setSearchQuery] = useState('');

  const handleQuantityChange = (id, action) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id
          ? {
              ...item,
              quantity: action === 'increase' ? item.quantity + 1 : item.quantity > 0 ? item.quantity - 1 : 0,
            }
          : item
      )
    );
  };

  const handleSearch = () => {
    // Filter products based on the search query
    return cart.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const filteredProducts = handleSearch();

  return (
    <div className="w-full p-8 bg-gray-100" style={{ fontFamily: 'Montserrat, sans-serif' }}>
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-4xl font-bold text-green-600">Our Products</h2>
        <div className="flex items-center gap-2">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search products"
            className="p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
          />
          <button
            onClick={handleSearch}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition"
          >
            Search
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg p-6">
            <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
            <h3 className="text-2xl font-bold text-green-700 mb-2">{product.name}</h3>
            <p className="text-gray-600 mb-2">{product.category}</p>
            <p className="text-xl font-semibold text-gray-800">{product.price}</p>

            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => handleQuantityChange(product.id, 'decrease')}
                  className="bg-red-500 text-white py-1 px-3 rounded hover:bg-red-600 transition"
                >
                  -
                </button>
                <span className="text-xl font-semibold">{product.quantity}</span>
                <button
                  onClick={() => handleQuantityChange(product.id, 'increase')}
                  className="bg-green-600 text-white py-1 px-3 rounded hover:bg-green-700 transition"
                >
                  +
                </button>
              </div>
              <button className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700 transition">
                Buy now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
