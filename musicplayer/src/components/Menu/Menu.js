
import React from 'react';
import menu from '../../img/sq_menu.svg'; 
import menu_ko from '../../img/sq_menu_ko.svg';
import './Menu.css';

const Menu = ({ children, ...rest }) => {
  return (
    <div className="menu" {...rest}>
      { children }
      <div className="container">
        <img src={menu} alt="Menu" className="icon" />
      </div>
    </div>
  )
}

export default Menu;

