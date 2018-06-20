import React, { Fragment } from 'react';
import Conjugate from 'turkish-conjugator';
import { connect } from 'react-redux';
import { verify } from 'turkish-conjugator';
import CardsPack from './ConjugatedCards/CardsPack';
import InvalidVerb from './ConjugatedCards/InvalidVerb';
import WrotedVerb from './ConjugatedCards/WrotedVerb';
import SpecialVerbConjugationAlert from './ConjugatedCards/SpecialVerbConjugationAlert';
import { specialVerbs } from './../data/verbs';
import { map, reduce, find } from './../utils/arrays';

const ConjugatedCards = props => {
  const passedVerb = props.match.params.verb;

  if(!verify.isTurkishVerb(passedVerb)) return (
                                                  <Fragment>
                                                    <WrotedVerb verb = { passedVerb } />
                                                    <InvalidVerb/>
                                                  </Fragment>
                                                );
  const { settings, conjugator } = props;                                             
  const { cardStates } = conjugator;

  const isSpecialVerb = specialVerbs.includes(passedVerb);

  let conjugations = map(
      Conjugate.it(passedVerb),
      (conjugation, index) => ({...conjugation, positive: cardStates[index], at: index})
    );
                                           
  conjugations = reduce(
    settings,
    (a, {tense, visible}) => visible ? [...a, find(conjugations, z => z.tense === tense)] : a,
    []
  );
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

const mapStateToProps = ({ settings, conjugator }) => ({
  settings,
  conjugator
})

export default connect(mapStateToProps)(ConjugatedCards);