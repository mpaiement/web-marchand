import React, { useState } from 'react';
import '../../App.css';
import Login from '../authentification/Login';
import { Button } from "@/components/ui/button";
import Signup from '../inscription/Signup';
import { Footer } from '../../layout/Footer';
import { useNavigate } from 'react-router-dom';

const Index = () => {
  const [content, setContent] = useState(null);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const navigate = useNavigate();

  const handleLoginClick = () => {
    setContent(<Login />);
    setIsContentVisible(true);
  };

  const handleRegisterClick = () => {
    setContent(<Signup />);
    setIsContentVisible(true);
  };

  const handleBackClick = () => {
    setContent(null);
    setIsContentVisible(false);
  };

  const handleMerchantClick = () => {
    navigate('admin-login');
  };

  return (
    <>
      <div className="relative min-h-screen flex flex-col justify-center items-center text-white"
        style={{ backgroundImage: `url('/images/hero/bg1.jpg')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Main content */}
        <div className="relative z-10 text-center">
          <div className="max-w-lg mx-auto p-8">
            <h1 className="text-4xl font-bold mb-4">Welcome</h1>
            <p className="text-xl mb-8">This site allows you to make purchases and pay using a QR code.</p>

            {/* Call to action buttons */}
            {!isContentVisible ? (
              <div className="flex flex-row w-full justify-evenly">
                <Button onClick={handleRegisterClick} variant="outline" className="w-48 py-3 border hover:border-black text-black hover:bg-white hover:text-black transition duration-300">
                  Sign up
                </Button>
                <Button onClick={handleLoginClick} variant="outline" className="w-48 py-3 border hover:border-black text-black hover:bg-white hover:text-black transition duration-300">
                  Login
                </Button>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                {content} {/* Display the content (Login or Signup form) */}
                <Button onClick={handleBackClick} variant="outline" className="py-3 mt-4 px-6 border border-white text-black hover:bg-white hover:text-black transition duration-300">
                  Back
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Espace Marchand Button */}
      <button
        onClick={handleMerchantClick}
        className="absolute top-4 right-4 px-4 py-2 bg-black text-white rounded-lg hover:bg-gray-700 transition duration-300 z-20"
      >
        Espace Marchand
      </button>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Index;
