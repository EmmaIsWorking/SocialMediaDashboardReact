import React from 'react';

const Counter = ({ children }) => (
  <section className='countersContainer'>
    <div className='container_background-facebook'>
      { children }
    </div>
  </section>
);

export default Counter;
