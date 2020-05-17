import React from 'react';
import { CounterCardStyles } from './styles';

const CountersCard = ({ smBackground, title, smIcon, counter, iconClassPct, iconPct, percentage }) => (
  <>
    <CounterCardStyles />
    <div className={smBackground}>
      <div className='countersContainer_card'>
        <p>
          <img src={smIcon} alt='facebook' />
          @
          {title}
        </p>
        <div className='countersContainer_card-followers'>
          <p>{counter}</p>
          <h3>Followers</h3>
        </div>
        {/* <p className='countersContainer_card-today'> */}
        <p className={iconClassPct}>
          <img src={iconPct} alt='icon' />
          { percentage }
          {' '}
          Today
        </p>
      </div>
    </div>
  </>
);

export default CountersCard;
