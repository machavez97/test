import React from 'react';
import { Routes, Route, useNavigate as navigate } from 'react-router-dom';
import HomePage from './HomePage';
import ProductPage from './product';
import ProductViewPage from './product-view';
import ContactPage from './contact';
import ComponentPage from './component';
import LocationPage from './location';
import OrderPage from './order';
import CompanyPage from './company';
import ItemCheckInPage from './itemCheckIn';
import ItemCheckInViewPage from './itemCheckIn-view';
import Shipping from './Shipping';
import LoginForm from './LoginForm';
import SignupForm from './signupForm';
import { useState } from 'react';
import Search from './search';
import SearchCompany from './searchcompany';
import SearchContact from './searchContact';
import ViewOnlyHome from './ViewOnlyHome';
import Invoice from './invoice';
import PackingSlip from './packingSlip'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isViewOnly, setIsViewOnly] = useState(false);

  const handleLogin = (viewOnly) => {
    setIsLoggedIn(true);
    setIsViewOnly(viewOnly);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate('/');
  
  };

  return (
    <div className="App">
     
        <Routes>

          <Route path="/" element={<HomePage handleLogout={handleLogout} />} />
          <Route path="/invoice" element={<Invoice />} />
          <Route path="/packingSlip" element={<PackingSlip />} />
          <Route path="/product" element={<ProductPage handleLogout={handleLogout}/>} />
          <Route path="/product/:product_id" element={<ProductViewPage handleLogout={handleLogout}/>} />
          <Route path="/contact" element={<ContactPage handleLogout={handleLogout}/>} />
          <Route path="/component" element={<ComponentPage handleLogout={handleLogout}/>} />
          <Route path="/location" element={<LocationPage handleLogout={handleLogout}/>} />
          <Route path="/order" element={<OrderPage handleLogout={handleLogout}/>} />
          <Route path="/company" element={<CompanyPage handleLogout={handleLogout}/>} />
          <Route path="/itemCheckIn" element={<ItemCheckInPage handleLogout={handleLogout}/>} />
          <Route path="/itemCheckIn/:id" element={<ItemCheckInViewPage handleLogout={handleLogout}/>} />
          <Route path="/shipping" element={<Shipping handleLogout={handleLogout}/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/searchcompany" element={<SearchCompany />} />
          <Route path="/search/searchContact" element={<SearchContact />} />
        </Routes>
     
    </div>
  );

  /*return (
    <div className="App">
      {isLoggedIn && !isViewOnly ? (
        <Routes>

<Route path="/invoice" element={<Invoice />} />
          <Route path="/" element={<HomePage handleLogout={handleLogout} />} />
          <Route path="/product" element={<ProductPage handleLogout={handleLogout}/>} />
          <Route path="/contact" element={<ContactPage handleLogout={handleLogout}/>} />
          <Route path="/component" element={<ComponentPage handleLogout={handleLogout}/>} />
          <Route path="/location" element={<LocationPage handleLogout={handleLogout}/>} />
          <Route path="/order" element={<OrderPage handleLogout={handleLogout}/>} />
          <Route path="/company" element={<CompanyPage handleLogout={handleLogout}/>} />
          <Route path="/itemCheckIn" element={<ItemCheckInPage handleLogout={handleLogout}/>} />
          <Route path="/shipping" element={<Shipping handleLogout={handleLogout}/>} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/searchcompany" element={<SearchCompany />} />
          <Route path="/search/searchContact" element={<SearchContact />} />
        </Routes>
      ) : isLoggedIn && isViewOnly ? (
        <Routes>
          <Route path="/" element={<ViewOnlyHome handleLogout={handleLogout} />} />
          <Route path="/search" element={<Search />} />
          <Route path="/search/searchcompany" element={<SearchCompany />} />
          <Route path="/search/searchContact" element={<SearchContact />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/" element={<LoginForm handleLogin={handleLogin} />} />
          <Route path="/signup" element={<SignupForm />} />
        </Routes>
      )}
    </div>
  );

}*/
}

export default App;
