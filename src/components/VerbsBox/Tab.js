import React from 'react';
import styled from 'styled-components';
import classNames from 'classnames';

const Toggler = styled.div`
  flex: 1;
  opacity: 0.5;
  cursor: pointer;
  transition: 0.2s;
`

const Tab = ({ seeTypeVerbs, avaliableRecentVerbs, text }) => (
  <Toggler 
    className={classNames('d-flex justify-center align-content-center', { 'tabhome--active': avaliableRecentVerbs})}
    onClick = { () => seeTypeVerbs() }
    children = { text }
  />
)

export default Tab;