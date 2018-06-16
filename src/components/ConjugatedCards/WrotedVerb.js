import React from 'react';
import styled from 'styled-components';
import { upFirstLetter } from './../../utils/strings';

const Container = styled.div`
  padding: 10px 0px;
  & p {
    font-size: 26px;
  }
`

const WrotedVerb = ({ verb }) => {
  return( 
    <Container>
      <p className='text-center'>
        { upFirstLetter( verb ) }
      </p>
    </Container>
  )
};

export default WrotedVerb;