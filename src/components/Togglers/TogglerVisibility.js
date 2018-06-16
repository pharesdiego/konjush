import React from 'react';
import styled from 'styled-components';
import { boundSettingToggleVisibility } from './../../boundedActions';
import { ViewIcon } from './../Icons';

const Switcher = styled.div.attrs({
  className: 'h-100 d-flex justify-center align-items-center'
})`
  float: right;
  width: 55px;
  cursor: pointer;
  & svg {
    cursor: pointer;
    width: 18px;
    opacity: 0.4;
  }
`

const TogglerVisibility = ({ tense }) => (
  <Switcher
    onClick = { () => boundSettingToggleVisibility(tense) }
    children = { <ViewIcon /> } />
)

export default TogglerVisibility