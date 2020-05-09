import React, { Children } from 'react';
import '../assets/styles/componets/Header.css'

const Header = ({ children }) => (
  <nav>
    <div className='container_socialMedia'>
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: 23,004</p>
      <hr />
    </div>

    <div className='toggleContainer'>
      <p className='toggleContainer_title'>Dark Mode</p>
      { children }
    </div>
  </nav>
);

export default Header;
