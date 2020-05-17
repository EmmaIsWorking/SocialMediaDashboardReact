import React from 'react';
import { OverviewCardStyles } from './styles';
import { MediaStyles } from '../../containers/media';

const OverviewCard = ({ title, smIcon, counter, iconClassPct, iconPct, percentage }) => (

  <>
    <MediaStyles />
    <OverviewCardStyles />
    <div className='overview_card'>
      <p>{title}</p>
      <img className='overview_card-iconSocialMedia' src={smIcon} alt='facebook' />
      <p className='overview_card-view'>{counter}</p>
      <p className={iconClassPct}>
        <img src={iconPct} alt='icon' />
        {percentage}
      </p>
    </div>
  </>
);

export default OverviewCard;
