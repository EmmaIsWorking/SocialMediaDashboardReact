import { createGlobalStyle } from 'styled-components';

export const OverviewStyles = createGlobalStyle `
.overview {
  padding: 0 5%;
  align-items: center;
  max-width: 1200px;
  margin-top: 20px;
}

.title{
  margin: 40px 0 20px;
  font-weight: 500;
}
.container_card {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
}
`