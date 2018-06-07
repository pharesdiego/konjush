import React, { Component, Fragment } from 'react';
import Conjugate from 'turkish-conjugator';
import Store from './../../../store/konjushStore';
import CardsPack from './CardsPack';


const WrotedVerb = props => {

  let upFirstLetter = str => str[0].toUpperCase() + str.slice(1);

  return( 
    <div className='verb-name'>
      <p className='text-center'>
        { upFirstLetter( props.verb ) }
      </p>
    </div>
  )
}

const ConjugatedCards = props => {

  let State = Store.getState();
  let settings = State.settings;
  let cardStates = State.conjugator.cardStates;
  // we add if it's positive at its original position (at)

  let conjugations = (State.conjugator.conjugations || Conjugate.it(props.match.params.verb))
                            .map((conjugation, i) => ({...conjugation, positive: cardStates[i].positive, at: i}));

    return (
      <Fragment>
        <WrotedVerb verb = { props.match.params.verb } />
        <CardsPack
          conjugations = { 
            settings
              .reduce((a, { tense, visible }) => visible ? [...a, conjugations.find(z => z.tense === tense)] : a , [])
          }
          url = { props.match.url }
        />
      </Fragment>
    )
  
}

export default ConjugatedCards;