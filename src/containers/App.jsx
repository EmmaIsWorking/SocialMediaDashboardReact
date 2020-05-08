import React from 'react';
import Header from '../components/Header';
import Counter from '../components/Counter';
import CountersCard from '../components/CountersCard';
import Overview from '../components/Overview'
import OverviewCard from '../components/OverviewCard'
const App = () => {
  return (
    <div>
      <Header />
      <Counter>
        <CountersCard title='nathanf' counter='1987' percentage='12' />
      </Counter>
      <Overview>
        <OverviewCard title='Pages Views' counter='87' percentage='3%' />
      </Overview>
    </div>
  );
};

export default App;
