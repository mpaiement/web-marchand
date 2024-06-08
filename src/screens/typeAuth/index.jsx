import React, { useState } from 'react';
import '../../App.css';
import Login from '../authentification/Login';
import { Button } from "@/components/ui/button"
import Signup from '../inscription/Signup';
import {Footer} from '../../layout/Footer';
const index = () => {
  const [content, setContent] = useState(null);
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleLoginClick = () => {
    setContent(<Login />);
    setIsContentVisible(true);
  };

  const handleRegisterClick = () => {
    setContent(<Signup />);
    setIsContentVisible(true);
  };

  return (
    <div>
    <div className="container">
    {/* Div pour l'image d'arrière-plan floutée */}
    <div className="background-image  blur "></div>

    {/* Contenu net */}
    <div className={`content ${isContentVisible ? "push-left" : ""}`}>
      <div className="content-inner">
        <div style={{ marginTop: '2rem', position: 'static' }}>
          <h1 style={{ fontSize: '3rem', fontWeight: 'bold', marginLeft: 'em', marginTop: 'em' }} className='text-black '>Welcome</h1>
          <p style={{ marginLeft: 'em', padding: '1em',fontSize: '1.4rem'}} className='text-black '>This site allows you to make</p>
          <p style={{ padding: 'em',fontSize: '1.4rem'}} className='text-black '>purchases and pay using a QR code.</p>
        </div>
        <div style={{ borderRadius: '0.75rem', boxShadow: '2px 2px 4px 9px rgba(0, 0, 0, 0.5)', width: '20em', margin: '5rem auto', padding: '1rem', }}>
          <div style={{ textAlign: 'center' }}>
            <p style={{ fontSize: '1.5rem' }} className='text-black'>Let's Get Started</p>
            <p className='text-black'>Connect instantly by scanning and paying.</p>
          </div>
          <div className="buttons" style={{ display: 'flex', flexDirection: 'column', gap: '1rem', textAlign: 'center' }}>
            <p className='text-black'>Join now</p>
            <Button onClick={handleRegisterClick} variant="outline" className="ml-20 px-4 py-4 w-32 border border-black text-black hover:bg-black hover:text-white transition duration-300">
              Sign up
            </Button>
            <p className='text-black'>Already have an account?</p>
            <Button onClick={handleLoginClick} variant="outline" className="ml-20 px-4 py-4 w-32 border border-black text-black hover:bg-black hover:text-white transition duration-300">
              Login
            </Button>
          </div>
        </div>
      </div>
    </div>
    {isContentVisible && (
      <div className="register-content">
        {content}
      </div>
    )}
  </div>
  <Footer />
  </div>
);
};

export default index;
