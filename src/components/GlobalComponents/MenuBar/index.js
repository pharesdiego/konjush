import React, { Component } from 'react';
import './menuBar.css';
import Store from './../../../store/konjushStore';
import { HouseIcon, InfoIcon, LayersIcon, BookIcon, WrenchIcon } from './../Icons';

import { Link } from 'react-router-dom';

const createButton = ({ to, icon }) => class extends Component {
  shouldComponentUpdate(){
    return false;
  }
  render(){
    return(
      <Link to = { to }>
        { icon }
      </Link>
    )
  }
}
let SettingsLink = createButton({
  to: '/settings',
  icon: <WrenchIcon/>
});

let HouseLink = createButton({
  to: '/',
  icon: <HouseIcon/>
});

let LearnLink = createButton({
  to: '/learn',
  icon: <LayersIcon/>
});

let AboutLink = createButton({
  to: '/about',
  icon: <InfoIcon/>
});


const MenuBar = props => (
  <div className='menu-bar w-100 d-flex justify-center'>
    <div className='menu-bar-container w-100 h-100 d-flex justify-around align-items-center'>
      <SettingsLink />
      <Link to={ Store.getState().conjugator.url }>
        <BookIcon/>
      </Link>
      <HouseLink/>
      <LearnLink/>
      <AboutLink/>
      
    </div>
  </div>
)

export default MenuBar;
