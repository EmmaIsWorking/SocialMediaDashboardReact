import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
h1,
h2,
h4,
h5,
h6 {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.paragraph};
}

p {
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  color: ${({ theme }) => theme.paragraph};
  font-size: 14px;
}

h3 {
  font-family: 'Inter', sans-serif;
  margin: 0;
  font-weight: 400;
  color: #63687e;
  text-transform: uppercase;
  letter-spacing: 8px;
  font-size: 14px;
}

body {
  padding: 0;
  margin: 0;
  background-color: ${props => props.theme.bg_body};
}
`