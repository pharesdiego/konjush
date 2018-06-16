import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { boundCardViewNegative, boundCardViewPositive } from './../../boundedActions';
import Transition from './../Transition';
import CardTab from './Card/CardTab';
import CardConjugationRow from './Card/CardConjugationRow';

const Container = styled.div.attrs({
  className: 'w-100 box-shape'
})`
  background: white;
  padding: 10px;
  margin-bottom: 15px;
  @media (min-width: 540px){
    width: calc(50% - 15px) !important;
  }
  @media (min-width: 768px){
    width: calc(33.33% - 15px) !important;
    margin: 0px 5px 10px 5px;
  }
  @media (min-width: 1280px){
    width: calc(25% - 15px) !important;
  }
`

const TenseName = styled.div`
  & p {
    font-size: 19px;
  }
`

const TabsContainer = styled.div.attrs({
  className: 'd-flex justify-around'
})`
  padding: 6px 0px;
  color: gray;
  font-size: 17px;
  & div {
    cursor: pointer;
    transition: 0.2s all ease-out;
  }
`
const RowsOfConjugations = styled.div``

class Card extends Component {

  shouldComponentUpdate(nextProps){
    const { url, isPositive } = this.props;
    return isPositive !== nextProps.isPositive || url !== nextProps.url;
  }

  render(){

    const { title, conjugation, isPositive, at, index } = this.props;
    const conjugationRows = ( isPositive ? conjugation.positive : conjugation.negative )
                                  .map((result, i) => <CardConjugationRow index={i} result={result} key={result} /> )

    return(
      <Transition duration={200} delay={ index * 10 }> 
        <Container>
          <TenseName>
            <p className='text-center'>{ title }</p>
          </TenseName>

          <TabsContainer>
            <CardTab 
                cardViewType = { () => boundCardViewPositive(at) }
                isPositive = { isPositive }
                text = 'Positive' />

            <CardTab 
                cardViewType = { () => boundCardViewNegative(at) }
                isPositive = { !isPositive }
                text = 'Negative' />

          </TabsContainer>

          <RowsOfConjugations 
            className='conjugation-content-container'
            children = { conjugationRows } />
        </Container>
      </Transition>
    )
  }
};


const mapStateToProps = ({ conjugator }) => ({
  conjugator
})

export default connect(mapStateToProps)(Card);