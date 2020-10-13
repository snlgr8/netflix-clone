import React, { useEffect, useState } from 'react';
import './Nav.css';

const Nav = () => {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener('scroll');
    };
  }, []);
  console.log(show);
  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <img
        src='https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg'
        alt='Netflix logo'
        className='nav_logo'
      />
      <img
        src='https://pbs.twimg.com/media/CW2i0pJW4AEYFI3?format=png&name=360x360'
        alt='Nrtflix Avatar'
        className='nav_avatar'
      />
    </div>
  );
};

export default Nav;
