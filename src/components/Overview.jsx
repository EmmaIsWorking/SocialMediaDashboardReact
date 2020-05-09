import React from 'react';
import '../assets/styles/componets/Overview.css';

const Overview = ({ children, title }) => (
  <section className='overview'>
    <h2 className='title'>{title}</h2>
    <div className='container_card'>
      { children }
    </div>
  </section>

);

export default Overview;
