import React, { useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Header from '../components/Header/Header';
import { GlobalStyles } from './styles';
import { lightColors, darkColors } from './variablesThemes';
import { MediaStyles } from './media';
import Counter from '../components/Counter/Counter';
import CountersCard from '../components/CounterCard/CountersCard';
import Overview from '../components/Overview/Overview';
import OverviewCard from '../components/OverviewCard/OverviewCard';
import fbLogo from '../assets/static/icon-facebook.svg';
import twLogo from '../assets/static/icon-twitter.svg';
import inLogo from '../assets/static/icon-instagram.svg';
import ytLogo from '../assets/static/icon-youtube.svg';
import upIcon from '../assets/static/icon-up.svg';
import downIcon from '../assets/static/icon-down.svg';

const App = () => {
  const [theme, setTheme] = useState(true);

  const changeTheme = () => {
    setTheme(!theme); //<-- Negamos el estado
  };

  return (
    <ThemeProvider theme={theme ? lightColors : darkColors}>
      <MediaStyles />
      <GlobalStyles />
      <div>
        <Header theme={theme} setTheme={changeTheme} />
        <Counter>
          <CountersCard smBackground='bg-facebook' title='nathanf' smIcon={fbLogo} counter='1987' iconClassPct='countersContainer_card-today' iconPct={upIcon} percentage='12' />
          <CountersCard smBackground='bg-twitter' title='nathanf' smIcon={twLogo} counter='1044' iconClassPct='countersContainer_card-today' iconPct={upIcon} percentage='99' />
          <CountersCard smBackground='bg-instagram' title='realnathanf' smIcon={inLogo} counter='11k' iconClassPct='countersContainer_card-today' iconPct={upIcon} percentage='1099' />
          <CountersCard smBackground='bg-youtube' title='Nathan F.' smIcon={ytLogo} counter='8239' iconClassPct='countersContainer_card-today-down' iconPct={downIcon} percentage='144 Today' />
        </Counter>
        <Overview title='OverView - Today'>
          <OverviewCard title='Pages Views' smIcon={fbLogo} counter='87' iconClassPct='overview_card-percentageUp' iconPct={upIcon} percentage='3%' />
          <OverviewCard title='Likes' smIcon={fbLogo} counter='52' iconClassPct='overview_card-percentageUp' iconPct={upIcon} percentage='3%' />
          <OverviewCard title='Likes' smIcon={inLogo} counter='5462' iconClassPct='overview_card-percentageDown' iconPct={downIcon} percentage='3%' />
          <OverviewCard title='Profile Views' smIcon={inLogo} counter='52K' iconClassPct='overview_card-percentageUp' iconPct={upIcon} percentage='3%' />
          <OverviewCard title='Retweets' smIcon={twLogo} counter='117' iconClassPct='overview_card-percentageUp' iconPct={upIcon} percentage='3%' />
          <OverviewCard title='Likes' smIcon={twLogo} counter='507' iconClassPct='overview_card-percentageUp' iconPct={upIcon} percentage='3%' />
          <OverviewCard title='Likes' smIcon={ytLogo} counter='107' iconClassPct='overview_card-percentageDown' iconPct={downIcon} percentage='3%' />
          <OverviewCard title='Total Views' smIcon={ytLogo} counter='1407' iconClassPct='overview_card-percentageDown' iconPct={downIcon} percentage='3%' />
        </Overview>
      </div>
    </ThemeProvider>
  );
};

export default App;
