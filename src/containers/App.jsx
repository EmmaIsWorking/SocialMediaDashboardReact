import React from 'react';
import Header from '../components/Header';
import Counter from '../components/Counter';
import CountersCard from '../components/CountersCard';
import Overview from '../components/Overview';
import OverviewCard from '../components/OverviewCard';
import '../assets/styles/App.css';

const App = () => {
  return (
    <div>
      <Header />
      <Counter>
        <CountersCard smBackground='container_background-facebook' title='nathanf' counter='1987' percentage='12' />
        <CountersCard smBackground='container_background-twitter' title='nathanf' counter='1044' percentage='99' />
        <CountersCard smBackground='container_background-instagram' title='realnathanf' counter='11k' percentage='1099' />
        <CountersCard smBackground='container_background-youtube' title='Nathan F.' counter='8239' percentage='144 Today' />
        <CountersCard smBackground='container_background-facebook' title='nathanf' counter='1987' percentage='12' />
        <CountersCard smBackground='container_background-twitter' title='nathanf' counter='1044' percentage='99' />
        <CountersCard smBackground='container_background-instagram' title='realnathanf' counter='11k' percentage='1099' />
        <CountersCard smBackground='container_background-youtube' title='Nathan F.' counter='8239' percentage='144 Today' />
      </Counter>
      <Overview title='OverView - Today'>
        <OverviewCard title='Pages Views' counter='87' percentage='3%' />
        <OverviewCard title='Pages Views' counter='87' percentage='3%' />
        <OverviewCard title='Pages Views' counter='87' percentage='3%' />
        <OverviewCard title='Pages Views' counter='87' percentage='3%' />
        <OverviewCard title='Pages Views' counter='87' percentage='3%' />
        <OverviewCard title='Pages Views' counter='87' percentage='3%' />
        <OverviewCard title='Pages Views' counter='87' percentage='3%' />
        <OverviewCard title='Pages Views' counter='87' percentage='3%' />
      </Overview>
    </div>
  );
};

export default App;
