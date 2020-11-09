
import React from 'react';
import './Time.css';

const Time = ({ children, ...rest }) => {
  return (
    <div className="time" {...rest}>
      { children }
      0:00/3:20
    </div>
  )
}

export default Time;

