// Inside src/components/Shuffle/Shuffle.js

import React from 'react';
import shuffle from '../../img/shuffle.svg'; 

const Shuffle = ({ children, ...rest }) => {
  return (
    <Shuffle className="Shuffle" {...rest}>
      { children }
      <img src={shuffle} alt="Shuffle" />
    </Shuffle>
  )
}

export default Shuffle;