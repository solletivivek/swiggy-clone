import React, { useState } from 'react';
import NavBar from '../components/NavBar';
import SideBar from '../components/SideBar';
import Login from '../components/forms/Login';
import Register from '../components/forms/Register';
import AddFirm from '../components/forms/AddFirm';
import AddProduct from '../components/forms/AddProduct';

const LandingPage = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [showRegister, setShowRegister] = useState(false);
  const [showAddFirm, setShowAddFirm] = useState(false);
  const [showAddProduct, setShowAddProduct] = useState(false);

  const showLoginForm = () => {
    setShowLogin(true);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(false);
  };

  const showRegisterForm = () => {
    setShowLogin(false);
    setShowRegister(true);
    setShowAddFirm(false);
    setShowAddProduct(false);
  };

  const showAddFirmForm = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(true);
    setShowAddProduct(false);
  };

  const showAddProductForm = () => {
    setShowLogin(false);
    setShowRegister(false);
    setShowAddFirm(false);
    setShowAddProduct(true);
  };

  return (
    <section className='landingSection'>
      <NavBar showLoginForm={showLoginForm} showRegisterForm={showRegisterForm} />

      <div className="collectionSection">
        <SideBar showAddFirmForm={showAddFirmForm} showAddProductForm={showAddProductForm} />
        {showLogin && <Login />}
        {showRegister && <Register />}
        {showAddFirm && <AddFirm />}
        {showAddProduct && <AddProduct />}
        {/* AddFirm and AddProduct can be added similarly */}
      </div>
    </section>
  );
}

export default LandingPage;
