import React from 'react';
import './index.css';

import { Link } from 'react-router-dom';

const MenuBar = props => (
  <div className='menu-bar w-100 d-flex justify-center'>
    <div className='menu-bar-container w-100 h-100 d-flex justify-around align-items-center'>
      <Link to='/options'>
        <img src='./images/wrench.svg' alt='Options'/>
      </Link>
      <Link to='/conjugation'>
        <img src='./images/open-book.svg' alt='Conjugation'/>
      </Link>
      <Link to='/'>
        <img src='./images/home.svg' alt='Home'/>
      </Link>
      <Link to='/learn'>
        <img src='./images/layers.svg' alt='Learn Turkish'/>
      </Link>
      <Link to='/about'>
        <img src='./images/info.svg' alt='Info'/>
      </Link>
    </div>
  </div>
)

export default MenuBar;
