import React from 'react';
import { CounterStyles } from './styles';

const Counter = ({ children }) => (
  <>
    <CounterStyles />
    <div className='countersContainer'>
      { children }
    </div>
  </>
);

export default Counter;