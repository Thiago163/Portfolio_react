import React from 'react';
import banner from '../assets/banner.gif';
import './Header.css';

const Header = () => {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header className='header'>
      <div className='banner'>
        <img src={banner} alt="Banner" className='banner-image' />
        <button className='btn' onClick={scrollToContact}>
          Entre em contato
        </button>
      </div>
    </header>
  );
};

export default Header;