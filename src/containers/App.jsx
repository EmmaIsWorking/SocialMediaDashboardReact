import React, { useState } from 'react';
import Header from '../components/Header/Header';
import { GlobalStyles } from './styles';
// import { MediaStyles } from './media';
import Counter from '../components/Counter/Counter';
import CountersCard from '../components/CounterCard/CountersCard';
import Overview from '../components/Overview/Overview';
import OverviewCard from '../components/OverviewCard/OverviewCard';
import fbLogo from '../assets/static/icon-facebook.svg';
import twLogo from '../assets/static/icon-twitter.svg';
import inLogo from '../assets/static/icon-instagram.svg';
import ytLogo from '../assets/static/icon-youtube.svg';

const App = () => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme); //<-- Negamos el estado
  };

  return (
    <>
      <GlobalStyles />
        <div>
          <Header theme={theme} setTheme={changeTheme} />
          <Counter>
            <CountersCard smBackground='bg-facebook' title='nathanf' smIcon={fbLogo} counter='1987' percentage='12' />
            <CountersCard smBackground='bg-twitter' title='nathanf' smIcon={twLogo} counter='1044' percentage='99' />
            <CountersCard smBackground='bg-instagram' title='realnathanf' smIcon={inLogo} counter='11k' percentage='1099' />
            <CountersCard smBackground='bg-youtube' title='Nathan F.' smIcon={ytLogo} counter='8239' percentage='144 Today' />
          </Counter>
          <Overview title='OverView - Today'>
            <OverviewCard title='Pages Views' smIcon={fbLogo} counter='87' percentage='3%' />
            <OverviewCard title='Pages Views' smIcon={fbLogo} counter='87' percentage='3%' />
            <OverviewCard title='Pages Views' smIcon={inLogo} counter='87' percentage='3%' />
            <OverviewCard title='Pages Views' smIcon={inLogo} counter='87' percentage='3%' />
            <OverviewCard title='Pages Views' smIcon={twLogo} counter='87' percentage='3%' />
            <OverviewCard title='Pages Views' smIcon={twLogo} counter='87' percentage='3%' />
            <OverviewCard title='Pages Views' smIcon={ytLogo} counter='87' percentage='3%' />
            <OverviewCard title='Pages Views' smIcon={ytLogo} counter='87' percentage='3%' />
          </Overview>
      </div>
    </>
  );
};

export default App;
