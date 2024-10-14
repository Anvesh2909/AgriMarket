import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Nav';
import Home from './components/Home';
import About from './components/About';
import Products from './components/Products'; // Importing the Products component
import Orders from './components/Orders'; // Importing the Orders component
import Favourites from './components/Favourites'; // Importing the Favourites component
import Login from './components/Login';
import Register from './components/Register'; // Importing the Register component
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/products" element={<Products />} /> {/* Adding the Products route */}
        <Route path="/orders" element={<Orders />} /> {/* Adding the Orders route */}
        <Route path="/favourites" element={<Favourites />} /> {/* Adding the Favourites route */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
      <About/>
    </Router>
  );
};
export default App;