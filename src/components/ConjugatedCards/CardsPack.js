import React from 'react';
import styled from 'styled-components';
import Card from './Card';

const Container = styled.div.attrs({
  className: 'w-100 h-100 d-flex align-items-center dir-column'
})`
  @media (min-width: 540px){
    flex-direction: row !important;
    flex-wrap: wrap;
    justify-content: space-between !important;
    align-items: flex-start !important;
    align-content: flex-start !important;
    max-height: 900px;
  }
  @media (min-width: 768px){
    justify-content: center !important;
  }
`


const CardsPack = ({ conjugations, url }) => (
  <Container>
    {
      conjugations.map(
        ({title, conjugation, tense, positive, at}, index) => <Card
                                                                title = { title }
                                                                conjugation = { conjugation }
                                                                key = { tense }
                                                                isPositive = { positive }
                                                                at = { at }
                                                                url = { url }
                                                                index = { index }
                                                              />
      )
    }
  </Container>
);



export default CardsPack;