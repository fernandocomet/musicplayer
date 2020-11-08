// Inside src/components/Shuffle/Shuffle.js

import React from 'react';
import shuffle from '../../img/sq_shuffle.svg'; 
import './Shuffle.css';

const Shuffle = ({ children, ...rest }) => {
  return (
    <Shuffle className="shuffle" {...rest}>
      { children }
      <div className="container">
        <img src={shuffle} alt="Shuffle" className="icon" />
      </div>
    </Shuffle>
  )
}

export default Shuffle;

