import React, { useRef } from 'react';
import '../assets/styles/componets/Toggle.css';

const Toggle = () => {
  const ref = useRef(null);
  function handleChange() {
    console.log(ref.current.checked);
    // if (ref.current.checked) {
    //   checkbox.setAttribute('checked', 'false');
    //   body.setAttribute('data-theme', 'light');
    // } else {
    //   checkbox.setAttribute('checked', 'true');
    //   body.setAttribute('data-theme', 'dark');
    // }
  }
  return (
    <div>
      <label className='switch'>
        <input ref={ref} onChange={handleChange} id='input' className='checkbox' type='checkbox' />
        <span className='slider round' />
      </label>
    </div>
  );
};
export default Toggle;
