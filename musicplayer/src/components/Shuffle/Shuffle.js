// Inside src/components/Shuffle/Shuffle.js

import React from 'react';
import shuffle from '../../img/sq_shuffle.svg'; 
import shuffle_ko from '../../img/sq_shuffle_ko.svg';
import './Shuffle.css';

const Shuffle = ({ children, ...rest }) => {
  return (
    <div className="shuffle" {...rest}>
      { children }
      <div className="container">
        <img src={shuffle} alt="Shuffle" className="icon" />
      </div>
    </div>
  )
}

export default Shuffle;

