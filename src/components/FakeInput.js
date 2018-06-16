import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div.attrs({
  className: 'd-flex justify-center align-items-center w-100'
})``

const StyledLink = styled(Link).attrs({
  className: 'input-shape box-shape w-100 h-100 d-flex'
})`
  font-size: 20px;
  border-bottom: 2px solid white;
  background-color: rgba(255, 255, 255, 0.15);
  cursor: text;
`


const FakeInput = props => (
  <Container>
    <StyledLink to='/conjugation'>
        <div
          className='w-100 d-flex justify-center align-items-center'
          children='Write a verb' />
    </StyledLink>
  </Container>
);

export default FakeInput;