import React from 'react';
import { CounterStyles } from './styles';
import { MediaStyles } from '../../containers/media';


const Counter = ({ children }) => (
  <>
    <MediaStyles />
    <CounterStyles />
    <div className='countersContainer'>
      { children }
    </div>
  </>
);

export default Counter;