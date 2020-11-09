
import React from 'react';
import like from '../../img/unliked.svg'; 
import loop_ko from '../../img/liked.svg';
import './Like.css';

const Like = ({ children, ...rest }) => {
  return (
    <div className="Like" {...rest}>
      { children }
      <div className="container">
        <img src={like} alt="Like" className="icon" />
      </div>
    </div>
  )
}

export default Like;

