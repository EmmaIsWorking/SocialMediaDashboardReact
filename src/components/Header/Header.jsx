import React from 'react';
import Toggle from '../Toggle/Toggle';
import { HeaderStyles } from './styles';

const Header = ({ theme, setTheme }) => (
  <>
    <HeaderStyles />
    <nav>
      <div className='container_socialMedia'>
        <h1>Social Media Dashboard</h1>
        <p>Total Followers: 23,004</p>
        <hr />
      </div>

      <div className='toggleContainer'>
        <p className='toggleContainer_title'>Dark Mode</p>
        <Toggle theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  </>
);

export default Header;
