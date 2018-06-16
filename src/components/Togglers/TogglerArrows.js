import React from 'react';
import styled from 'styled-components';
import { boundSettingOrder } from './../../boundedActions';
import { ArrowIcon } from '../Icons';

const Box = styled.div.attrs({
  className: 'd-flex dir-column h-100'
})`
  width: 50px;
  float: left;
  & span {
    flex: 1;
    cursor: pointer;
  }
  & span svg {
    width: 9px;
  }
  & span:first-child svg {
    transform: rotate(-90deg);
    margin-top: 4px;
  }
  & span:last-child svg {
    transform: rotate(90deg);
    margin-bottom: 4px;
  }
`

const TogglerArrows = ({ index }) => {
  const arrowSpans = [-1, 1].map((n, i) => <span 
                                              key= {i} 
                                              className = 'd-flex justify-center'
                                              onClick = { _ => boundSettingOrder({ from: index, to: index + n}) }
                                              children = { <ArrowIcon /> }
                                            />)

  return (
    <Box children = { arrowSpans } />
  )
}

export default TogglerArrows;