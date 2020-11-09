

import React from 'react';
import volume from '../../img/sq_volume.svg';
import volume_off from '../../img/sq_volume_off.svg';
import no_volume from '../../img/sq_novolume.svg';
import './Volume.css';

const Volume = ({ children, ...rest }) => {
  return (
    <div className="volume" {...rest}>
      { children }
      <div className="volume_icon">
         <img src={volume} alt="" className="icon" />
      </div>
      <div className="vcontainer">
        <div className="vactive"></div>
        <div className="vall"></div>
      </div>
    </div>
  )
}

export default Volume;

