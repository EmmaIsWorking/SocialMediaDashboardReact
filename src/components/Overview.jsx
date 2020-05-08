import React from 'react';

const Overview = ({ children, title,})=> (
  <section className='overview'>
    <h2 className='title'>{title}</h2>
    { children }
  </section>

);

export default Overview;