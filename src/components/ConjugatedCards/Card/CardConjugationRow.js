import React from 'react';
import styled from 'styled-components';

const Row = styled.div.attrs({
  className: 'd-flex'
})`
  font-size: 17px;
  &:not(:last-child){
    margin-bottom: 3px;
    border-bottom: 1px solid #e0e0e0;
  }
`

const Pronoun = styled.p`
  min-width: 50px;
  color: gray;
`

const Conjugation = styled.p`
  word-break: break-all;
`
const pronouns = ['Ben', 'Sen', 'O', 'Biz', 'Siz', 'Onlar'];

const CardConjugationRow = ({ index, result }) => {
  return(
    <Row>
      <Pronoun children={ pronouns[index] } />
      <Conjugation children={ result } />
    </Row>
  )
}

export default CardConjugationRow;