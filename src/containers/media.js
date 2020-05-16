import { createGlobalStyle } from 'styled-components';

export const MediaStyles = createGlobalStyle `
@media (max-width: 768px) {
  .container_card {
    grid-template-columns: 1fr 1fr;
  }

  .countersContainer {
    grid-template-columns: 1fr 1fr;
  }

  .overview_card-iconSocialMedia {
    left: 115px !important;
  }
}

@media (max-width: 425px) {
  nav {
    grid-template-columns: 1fr;
  }

  nav hr {
    display: block;
  }

  nav p {
    margin: 5px;
  }

  .countersContainer {
    grid-template-columns: 1fr;
  }

  .container_card {
    grid-template-columns: 1fr;
  }

  .overview_card-iconSocialMedia {
    left: 136px !important;
  }

  .toggleContainer {
    justify-content: space-between;
  }

  .toggleContainer_title {
    margin: 5px;
  }
}
`