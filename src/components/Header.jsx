import React from 'react';

const Header = () => (
  <nav>
    <div className='container_socialMedia'>
      <h1>Social Media Dashboard</h1>
      <p>Total Followers: 23,004</p>
      <hr />
    </div>

    <div className='toggleContainer'>
      <p className='toggleContainer_title'>Dark Mode</p>
      <label className='switch'>
        <input id='input' className='checkbox' type='checkbox' />
        <span className='slider round' />
      </label>
    </div>
  </nav>
);

export default Header;
