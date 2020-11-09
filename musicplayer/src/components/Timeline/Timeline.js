

import React from 'react';
import active from '../../img/active.svg'; 
import all from '../../img/all.svg';
import './Timeline.css';

const Timeline = ({ children, ...rest }) => {
  return (
    <div className="timeline" {...rest}>
      { children }
      <div className="active">
        {/* <img src={active} alt="" className="icon" /> */}
      </div>
      <div className="all"></div>
    </div>
  )
}

export default Timeline;

