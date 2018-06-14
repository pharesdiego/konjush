import React from 'react';
import './menuBar.css';
import Store from './../../../store/konjushStore';
import { HouseIcon, InfoIcon, LayersIcon, BookIcon, WrenchIcon } from './../Icons';
import { NavLink } from 'react-router-dom';

const createButton = ({ to, icon }) => _ =>(
  <NavLink to={to} activeClassName='menu--selected' children={ icon } exact />
)

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


const MenuBar = props => {
  // MenuBar is a component that always re-render itselfs,
  // so we can control the document title from here.
  controlDocumentTitle(window.location.pathname);

  const isCurrentViewConjugation = path => path.includes('conjugation');

  return (
    <div className='menu-bar w-100 d-flex justify-center'>
      <div className='menu-bar-container w-100 h-100 d-flex justify-around align-items-center'>
        <SettingsLink />
        <NavLink 
          to={ Store.getState().conjugator.url } 
          activeClassName='menu--selected'
          isActive={ (_, {pathname}) => isCurrentViewConjugation(pathname) }
          children = { <BookIcon /> } />
        <HouseLink />
        <LearnLink />
        <AboutLink />
      </div>
    </div>
  )
}
let upFirstLetter = str => str[0].toUpperCase() + str.slice(1);

const controlDocumentTitle = pathname => {
  let currentPage = pathname.split('/')[1] || 'home';
  let verb = currentPage === 'conjugation' ? pathname.split('/')[2] : false;
  document.title = upFirstLetter(verb || currentPage) + ' | Konjüsh';
}

export default MenuBar;
