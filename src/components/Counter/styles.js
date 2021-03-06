import { createGlobalStyle } from 'styled-components';

export const CounterStyles = createGlobalStyle`
.countersContainer {
  max-width: 1200px;
  padding: 0 5%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 20px;
  align-items: center;
}
`