import React, { Component } from 'react';
import { boundCardViewNegative, boundCardViewPositive } from './../../../../boundedActions';
import Store from './../../../../store/konjushStore';
import FadeAndTranslationTransition from './../../../GlobalComponents/Transitions';

const CardsPack = props => (
  <div className='cardsPack-container w-100 h-100 d-flex align-items-center dir-column'>
    {
      props.conjugations.map(
        ({title, conjugation, tense, positive, at}, index) => <Card
                                                        title = { title }
                                                        conjugation = { conjugation }
                                                        key = { tense }
                                                        isPositive = { positive }
                                                        at = { at }
                                                        url = { props.url }
                                                        index = { index }
                                                      />
      )
    }
  </div>
);

class Card extends Component {

  shouldComponentUpdate(){
    let State = Store.getState().conjugator;
    return (this.props.isPositive !== State.cardStates[this.props.at].positive) || (this.props.url !== State.url && State.url !== '/conjugation');
  }

  render(){
    return(
      <FadeAndTranslationTransition duration={200} delay={ this.props.index * 10 }> 
      <div className='card-container w-100 box-shape'>
        <div className='card-title-tense'>
          <p className='text-center'>{ this.props.title }</p>
        </div>
        <div className='toggle-verb-mode-container d-flex justify-around'>
          <div
            onClick = { () => boundCardViewPositive(this.props.at) }
            className = { this.props.isPositive ? 'tab--active' : '' }
          >Positive</div>

          <div
            onClick = { () => boundCardViewNegative(this.props.at) }
            className = { this.props.isPositive ? '' : 'tab--active' }
          >Negative</div>

        </div>
        <div className='conjugation-content-container'>
          {
            this.props.isPositive
            ? this.props.conjugation.positive.map(
              (result, i) => (
                <CardConjugationRow index={i} result={result} key={i} />   
              )
            )
            : this.props.conjugation.negative.map(
              (result, i) => (
                <CardConjugationRow index={i} result={result} key={i} />   
              )
            )
          }
        </div>
      </div>
      </FadeAndTranslationTransition>
    )
  }
};


const CardConjugationRow = props => {
  const pronouns = ['Ben', 'Sen', 'O', 'Biz', 'Siz', 'Onlar'];

  return(
    <div className='conjugation-content-result d-flex'>
      <p className='content-result-pronoun'>{ pronouns[props.index] }</p>
      <p className='content-result-conjugation'>{ props.result }</p>
    </div>
  )
}


export default CardsPack;