import React from 'react';
import { Route } from 'react-router-dom';
import Conjugate from 'turkish-conjugator';
import createSection from './../GlobalComponents/ComponentSection';
import InputBoxManager from './InputBoxManager';
import ConjugatedCards from './ConjugatedCards';
import { boundReceiveConjugationsUrlAndRecentVerb } from './../../boundedActions';
import './conjugation.css';


let ConjugationComponent = createSection({
  section: 'conjugation',
  addedClass: 'gray-scroll'
});

const Conjugation = props => {

  let verbRouteManager = verb => {
    props.history.push('/conjugation/' + verb)
    boundReceiveConjugationsUrlAndRecentVerb({
      verb,
      conjugations: Conjugate.it(verb),
      url: '/conjugation/' + verb
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