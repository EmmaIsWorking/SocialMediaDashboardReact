import React from 'react';
import Header from '../components/Header';
import Toggle from '../components/Toggle';
import Counter from '../components/Counter';
import CountersCard from '../components/CountersCard';
import Overview from '../components/Overview';
import OverviewCard from '../components/OverviewCard';
import '../assets/styles/App.css';
import fbLogo from '../assets/static/icon-facebook.svg';
import twLogo from '../assets/static/icon-twitter.svg';
import inLogo from '../assets/static/icon-instagram.svg';
import ytLogo from '../assets/static/icon-youtube.svg';

const App = () => {
  return (
    <div>
      <Header>
        <Toggle />
      </Header>
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
  );
};

export default App;
