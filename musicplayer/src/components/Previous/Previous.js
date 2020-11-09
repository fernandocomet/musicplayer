
import React from 'react';
import before from '../../img/sq_before.svg'; 
import before_ko from '../../img/sq_before_ko.svg';
import './Previous.css';

const Previous = ({ children, ...rest }) => {
  return (
    <div className="previous" {...rest}>
      { children }
      <div className="container">
        <img src={before} alt="Previous" className="icon" />
      </div>
    </div>
  )
}

export default Previous;

