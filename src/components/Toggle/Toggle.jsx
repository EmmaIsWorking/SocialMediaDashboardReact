import React from 'react';
import { ToggleStyles } from './styles';

const Toggle = ({ theme, setTheme }) => {

  return (
    <>
      <ToggleStyles />
      <label className='switch'>
        <input
          onClick={setTheme}
          id='input'
          className='checkbox'
          type='checkbox'
          defaultChecked={theme} //<-- Como esta el botton cuando se inicializa la pag
        />
        <span className='slider round' />
      </label>
    </>
  );
};

export default Toggle;
