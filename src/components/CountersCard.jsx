import React from 'react';

const CountersCard = ({ title, counter, percentage }) => (
  <div className='countersContainer_card'>
    <p>
      <img src='images/icon-facebook.svg' alt='facebook' />
      @{title}
    </p>
    <div className='countersContainer_card-followers'>
      <p>{counter}</p>
      <h3>Followers</h3>
    </div>
    <p className='countersContainer_card-today'>
      <img src='images/icon-up.svg' alt='up' />
      { percentage} Today
    </p>
  </div>
);

export default CountersCard;
