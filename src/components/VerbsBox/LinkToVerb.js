import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Transition from './../Transition';
import { boundReceiveURL } from './../../boundedActions';

const VerbLinkContainer = styled.div`
  padding: 2px 5px;
  display: inline-block;
  margin: 5px;
`
const LinkToVerb = ({ index, verb }) => {
  const url = '/conjugation/' + verb;
  return (
    <Transition duration={200} delay={ index * 5 }>
      <VerbLinkContainer>
        
        <Link 
          to = {url}
          onClick = { _ => boundReceiveURL(url) }
          children = { verb } />
          
      </VerbLinkContainer>
    </Transition>
  )
}

export default LinkToVerb;