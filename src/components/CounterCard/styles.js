import { createGlobalStyle } from 'styled-components';

export const CounterCardStyles = createGlobalStyle `
.bg-facebook {
  border-top: 4px solid transparent;
  background: #00bfff;
  border-radius: 10px;
}

.bg-twitter {
  border-top: 4px solid transparent;
  background: #1ca0f2;
  border-radius: 10px;
}

.bg-instagram {
  border-top: 4px solid transparent;
  background: linear-gradient(0.25turn, #fdc468, #df4996);
  border-radius: 10px;
}

.bg-youtube {
  border-top: 4px solid transparent;
  background: #c4032a;
  border-radius: 10px;
}
.countersContainer_card {
  background-color: ${({ theme }) => theme.color_card};
  align-content: center;
  display: flex;
  align-items: center;
  flex-direction: column;
  min-width: 210px;
}

.countersContainer_card p {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.paragraph};
  font-size: 12px;
  display: flex;
  align-items: center;
}

.countersContainer_card p img {
  margin: 0 5px;
}

.countersContainer_card-followers {
  display: flex;
  align-items: center;
  flex-direction: column;
}

.countersContainer_card-followers p {
  font-size: 60px;
  margin: 0;
}

.countersContainer_card-today {
  color: #1db489 !important;
}
.countersContainer_card-today-down {
  color: #dc414c !important;
}
`