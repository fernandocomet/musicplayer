
import React from 'react';
import loop from '../../img/sq_loop.svg'; 
import loop_ko from '../../img/sq_loop_ko.svg';
import './Loop.css';

const Loop = ({ children, ...rest }) => {
  return (
    <div className="loop" {...rest}>
      { children }
      <div className="container">
        <img src={loop} alt="Loop" className="icon" />
      </div>
    </div>
  )
}

export default Loop;

