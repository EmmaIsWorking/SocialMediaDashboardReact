import React from 'react';
import '../assets/styles/componets/Toggle.css';

const Toggle = () => (
  <div>
    <label className='switch'>
      <input id='input' className='checkbox' type='checkbox' />
      <span className='slider round' />
    </label>
  </div>
);

export default Toggle;
