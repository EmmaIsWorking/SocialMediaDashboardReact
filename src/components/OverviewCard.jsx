import React from 'react';

const OverviewCard = ({ title, counter, percentage }) => (
  <div className='overview_card'>
    <p>{title}</p>
    <img className='overview_card-iconSocialMedia' src='images/icon-facebook.svg' alt='facebook' />
    <p className='overview_card-view'>{counter}</p>
    <p className='overview_card-percentageUp'>
      <img src='images/icon-up.svg' alt='up' />
      {percentage}
    </p>
  </div>
);

export default OverviewCard;
