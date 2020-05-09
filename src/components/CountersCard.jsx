import React from 'react';
import '../assets/styles/componets/CountersCard.css';
import fblogo from '../assets/static/icon-facebook.svg';


const CountersCard = ({ smBackground, title, counter, percentage }) => (

  <div className={smBackground}>
    <div className='countersContainer_card'>
      <p>
        <img src={fblogo} alt='facebook' />
        @
        {title}
      </p>
      <div className='countersContainer_card-followers'>
        <p>{counter}</p>
        <h3>Followers</h3>
      </div>
      <p className='countersContainer_card-today'>
        <img src='images/icon-up.svg' alt='up' />
        { percentage }
        {' '}
        Today
      </p>
    </div>
  </div>
);

export default CountersCard;
