import React from 'react';
import '../assets/styles/componets/Counter.css';

const Counter = ({ children }) => (
  <div className='countersContainer'>
    { children }
  </div>
);

export default Counter;