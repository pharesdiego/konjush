import React from 'react';
import styled from 'styled-components';

const TenseContainer = styled.div.attrs({
  className: 'justify-center h-100'
})`
  display: inline-block;
  font-size: 20px;
`
const TogglerTitle = ({ title }) => {
  return (
    <TenseContainer>
      <div 
        className='d-flex justify-center align-items-center w-100 h-100'
        children = { title } />
    </TenseContainer>
  )
}

export default TogglerTitle;