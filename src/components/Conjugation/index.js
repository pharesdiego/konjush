import React from 'react';
import { Route } from 'react-router-dom';
import Conjugate from 'turkish-conjugator';
import createSection from './../GlobalComponents/ComponentSection';
import InputBoxManager from './InputBoxManager';
import ConjugatedCards from './ConjugatedCards';
import { boundReceiveConjugations, boundReceiveURL } from './../../boundedActions';
import './conjugation.css';


let ConjugationComponent = createSection({
  section: 'conjugation'
});

const Conjugation = props => {

  let verbRouteManager = verb => {
    props.history.push('/conjugation/' + verb)
    boundReceiveURL('/conjugation/' + verb);
    boundReceiveConjugations({
      conjugations: Conjugate.it(verb)
    })
  }

  return(
    <ConjugationComponent>
      <InputBoxManager verbRouteManager = { verbRouteManager } />
      <Route exact path='/conjugation/:verb' component={ ConjugatedCards }/>
    </ConjugationComponent>
  )
}

export default Conjugation;