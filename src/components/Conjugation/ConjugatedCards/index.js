import React, { Fragment } from 'react';
import Conjugate from 'turkish-conjugator';
import Store from './../../../store/konjushStore';
import CardsPack from './CardsPack';
import { verify } from 'turkish-conjugator';
import { specialVerbs } from '../../../data/verbs';

let upFirstLetter = str => str[0].toUpperCase() + str.slice(1);

const WrotedVerb = props => {

  return( 
    <div className='verb-name'>
      <p className='text-center'>
        { upFirstLetter( props.verb ) }
      </p>
    </div>
  )
};

const InvalidVerb = props => (
  <div className='conjugated-cards-verb-error box-shape'>
    <h3 className='text-center'>
      This is not a correct turkish verb { ':(' }
    </h3>
    <p className='text-center'>
      Try again with a correct one like Gelmek or Gitmek {';)'} 
    </p>
  </div>
);

const SpecialVerbConjugationAlert = props => (
  <div className='w-100 alert-special-verb box-shape'>
    <p className='text-center'>
      { upFirstLetter( props.verb ) } is a verb with two different type of conjugations.&nbsp;
      <a href={'http://tdk.gov.tr/index.php?option=com_gts&arama=gts&kelime=' + props.verb } target='blank'>
        See more on TDK.
      </a>
    </p>
  </div>
);

const ConjugatedCards = props => {
  let passedVerb = props.match.params.verb;

  if(!verify.isTurkishVerb(passedVerb)) return (
                                                  <Fragment>
                                                    <WrotedVerb verb = { passedVerb } />
                                                    <InvalidVerb/>
                                                  </Fragment>
                                                );
                                               
  let State = Store.getState();
  let settings = State.settings;
  let cardStates = State.conjugator.cardStates;
  let isSpecialVerb = specialVerbs.includes(passedVerb);

  let conjugations = Conjugate
                      .it(passedVerb)
                      .map((conjugation, i) => ({...conjugation, positive: cardStates[i].positive, at: i}));

  conjugations = settings
                    .reduce((a, {tense, visible}) => visible ? [...a, conjugations.find(z => z.tense === tense)] : a, []);
    return (
      <Fragment>
        <WrotedVerb verb = { passedVerb } />
        {
          isSpecialVerb && 
            <SpecialVerbConjugationAlert verb={ passedVerb } />
        }
        <CardsPack
          conjugations = { conjugations }
          url = { props.match.url } />
      </Fragment>
    )
  
};

export default ConjugatedCards;