

import React from 'react';
import next from '../../img/sq_after.svg'; 
import next_ko from '../../img/sq_after_ko.svg';
import './Next.css';

const Next = ({ children, ...rest }) => {
  return (
    <div className="next" {...rest}>
      { children }
      <div className="container">
        <img src={next} alt="Next" className="icon" />
      </div>
    </div>
  )
}

export default Next;

