import React from 'react';
import styled from 'styled-components';
const Container = styled.div.attrs({
  className: 'box-shape'
})`
  background-color: white;
  padding: 25px;
`

const InvalidVerb = props => (
  <Container>
    <h3 className='text-center'>
      This is not a correct turkish verb { ':(' }
    </h3>
    <p className='text-center'>
      Try again with a correct one like Gelmek or Gitmek {';)'} 
    </p>
  </Container>
);

export default InvalidVerb;