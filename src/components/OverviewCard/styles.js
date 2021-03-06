import { createGlobalStyle } from 'styled-components';

export const OverviewCardStyles = createGlobalStyle `
.overview_card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 0;
  align-items: center;
  grid-template-rows: 1fr 1fr;
  border: 1px solid transparent;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 30px;
  min-width: 210px;
  min-height: 100px;
  background-color: ${({ theme }) => theme.color_card};
}

.overview_card p {
  margin: 0;
}

.overview_card .overview_card-iconSocialMedia {
  margin-left:auto;

}

.overview_card .overview_card-view {
  font-size: 30px;
}

.overview_card .overview_card-percentageUp {
  width:26px;
  top: 7px;
  margin-left:auto;
  font-size: 12px;
  color: #1db489;
}

.overview_card .overview_card-percentageDown {
  width:26px;
  top: 7px;
  margin-left:auto;
  font-size: 12px;
  color: #dc414c;
}
`