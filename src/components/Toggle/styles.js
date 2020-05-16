import { createGlobalStyle } from 'styled-components';

export const ToggleStyles = createGlobalStyle `
.switch {
  position: relative;
  display: inline-block;
  width: 46px;
  height: 23px;
}

.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(90deg, #378fe6, #3eda82);
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 17px;
  width: 17px;
  left: 4px;
  top: 3px;
  bottom: 2.6px;
  background-color: #fff;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked+.slider {
  background: #aeb3cb;
}

input:checked+.slider:before {
  background: #fff;
}

input:checked+.slider:hover {
  background: linear-gradient(90deg, #378fe6, #3eda82);
}

input:focus+.slider {
  box-shadow: 0 0 1px linear-gradient(90deg, #378fe6, #3eda82);
}

input+.slider:before {
  background: #1e202a;
}

input:checked+.slider:before {
  -webkit-transform: translateX(21px);
  -ms-transform: translateX(21px);
  transform: translateX(21px);
}

.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
`