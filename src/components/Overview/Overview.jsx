import React from 'react';
import { OverviewStyles } from './styles';
import { MediaStyles } from '../../containers/media';

const Overview = ({ children, title }) => (

  <>
    <MediaStyles />
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
