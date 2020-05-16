import { createGlobalStyle } from 'styled-components';

export const HeaderStyles = createGlobalStyle`
nav {
  display: grid;
  grid-template-columns: 1fr 150px;
  justify-content: space-around;
  position: relative;
  max-width: 1200px;
  grid-gap: 20px;
  align-items: center;
  padding: 0 5%;
}

nav h1 {
  margin-bottom: 5px;
}

nav p {
  margin: 5px auto;
}

nav hr {
  display: none;
}

.container_socialMedia {
  position: relative;
}
.toggleContainer {
  display: flex;
}
`
