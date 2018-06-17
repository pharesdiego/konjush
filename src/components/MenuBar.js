import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { upFirstLetter } from './../utils/strings';
import { HouseIcon, InfoIcon, LayersIcon, BookIcon, WrenchIcon } from './Icons';
import store from './../store';

const createButton = ({ to, icon }) => _ => (
  <NavLink to={to} activeClassName='menu--selected' children={ icon } exact />
)

let SettingsLink = createButton({
  to: '/konjush/settings',
  icon: <WrenchIcon/>
});

let HouseLink = createButton({
  to: '/konjush/',
  icon: <HouseIcon/>
});

let LearnLink = createButton({
  to: '/konjush/learn',
  icon: <LayersIcon/>
});

let AboutLink = createButton({
  to: '/konjush/about',
  icon: <InfoIcon/>
});

const Wrapper = styled.div.attrs({
  className: 'w-100 d-flex justify-center'
})`
  height: 60px;
  background: linear-gradient(180deg, rgba(236, 2, 2, 0.11),rgba(2, 2, 2, 0.45));
  padding: 5px;
  position: fixed;
  bottom: 0;
`;

const Container = styled.div.attrs({
  className: 'w-100 h-100 d-flex justify-around align-items-center'
})`
  a {
    padding: 5px;
    opacity: 0.6;
    transition: 0.3s all;
  }
  a.menu--selected {
    opacity: 1 !important;
  }

  svg {
    width: 30px;
  }
  @media (min-width: 768px){
    width: 50% !important;
  }

`

const MenuBar = props => {
  // MenuBar is a component that always re-render itselfs,
  // so we can control the document title from here.
  controlDocumentTitle(window.location.pathname);
  const { conjugator } = store.getState();
  const isCurrentViewConjugation = path => path.includes('conjugation');

  return (
    <Wrapper>
      <Container>
        <SettingsLink />
        <NavLink 
          to={ conjugator.url } 
          activeClassName='menu--selected'
          isActive={ (_, {pathname}) => isCurrentViewConjugation(pathname) }
          children = { <BookIcon /> } />
        <HouseLink />
        <LearnLink />
        <AboutLink />
      </Container>
    </Wrapper>
  )
}

const controlDocumentTitle = pathname => {
  let currentPage = pathname.split('/')[2] || 'home';
  let verb = currentPage === 'conjugation' && pathname.split('/')[3];
  document.title = upFirstLetter(decodeURI((verb || currentPage) + ' | Konjüsh'));
}

export default MenuBar;
