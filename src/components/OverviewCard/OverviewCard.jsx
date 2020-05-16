import React from 'react';
import { OverviewCardStyles } from './styles';

const OverviewCard = ({ title, smIcon, counter, percentage }) => (

  <>
    <OverviewCardStyles />
    <div className='overview_card'>
      <p>{title}</p>
      <img className='overview_card-iconSocialMedia' src={smIcon} alt='facebook' />
      <p className='overview_card-view'>{counter}</p>
      <p className='overview_card-percentageUp'>
        <img src='images/icon-up.svg' alt='up' />
        {percentage}
      </p>
    </div>
  </>
);

export default OverviewCard;
