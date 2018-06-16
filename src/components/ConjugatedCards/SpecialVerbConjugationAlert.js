import React from 'react';
import styled from 'styled-components';
import { upFirstLetter } from './../../utils/strings';

const Container = styled.div.attrs({
  className: 'w-100 box-shape'
})`
  align-self: center;
  padding: 10px;
  margin-bottom: 15px;
  color: white;
  background: #ff6580 linear-gradient(45deg, #ff6580,#ff9557);
  & a {
    text-decoration: underline;
  }
  @media (min-width: 768px){
    width: 50% !important;
  }
`

const SpecialVerbConjugationAlert = ({ verb }) => (
  <Container>
    <p className='text-center'>
      { upFirstLetter( verb ) } is a verb with two different meanings and conjugations.&nbsp;
      <a href={'http://tdk.gov.tr/index.php?option=com_gts&arama=gts&kelime=' + verb } target='blank'>
        See more on TDK.
      </a>
    </p>
  </Container>
);

export default SpecialVerbConjugationAlert;