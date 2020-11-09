
import React from 'react';
import cover from '../../img/cover.png'; 
import './Caratule.css';

const Caratule = ({ children, ...rest }) => {
  return (
    <div className="caratule" {...rest}>
      {/* { children } */}
      <div className="cover">
        <img src={cover} alt="Cover" className="icon" />
      </div>
      <div className="titles">
        <div className="song">This is the song{children}</div>
        <div className="author">This is the author{children}</div>
      </div>
    </div>
  )
}

export default Caratule;
