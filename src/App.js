import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './product';
import ContactPage from './contact';
import ComponentsPage from './components';
import LocationPage from './location';
import OrderPage from './order';
import CompanyPage from './company';
import ItemCheckInPage from './itemCheckIn';
import Shipping from './Shipping';
import LoginForm from './LoginForm';
import SignupForm from './signupForm';
import { useState } from 'react';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="App">
      {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product" element={<ProductPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/components" element={<ComponentsPage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/order" element={<OrderPage />} />
            <Route path="/company" element={<CompanyPage />} />
            <Route path="/itemCheckIn" element={<ItemCheckInPage />} />
            <Route path="/shipping" element={<Shipping />} />
          </Routes>
      ) : (

<Routes>
          <Route path="/" element={<LoginForm handleLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
        )}
    </div>
  );
}

export default App;
