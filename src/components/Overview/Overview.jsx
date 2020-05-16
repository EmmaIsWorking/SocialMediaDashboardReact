import React from 'react';
import { OverviewStyles } from './styles';

const Overview = ({ children, title }) => (

  <>
    <OverviewStyles />
      <section className='overview'>
        <h2 className='title'>{title}</h2>
        <div className='container_card'>
          { children }
        </div>
      </section>
  </>
);

export default Overview;
