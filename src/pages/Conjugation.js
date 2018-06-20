import React from 'react';
import { Route } from 'react-router-dom';
import Layout from  '../components/Layout';
import { boundReceiveUrlAndRecentVerb } from './../boundedActions';
import InputBoxManager from './../components/InputBoxManager';
import ConjugatedCards from './../components/ConjugatedCards';

const Conjugation = props => {

  const verbRouteManager = verb => {
    props.history.push('/konjush/conjugation/' + verb)
    boundReceiveUrlAndRecentVerb({
      verb,
      url: '/konjush/conjugation/' + verb,
    })
  }
  return(
    <Layout section='conjugation' addedClass='gray-scroll no-overflow-x auto-overflow-y'>
      <InputBoxManager verbRouteManager = { verbRouteManager } />
      <Route exact path='/konjush/conjugation/:verb' component={ ConjugatedCards }/>
    </Layout>
  )
}

export default Conjugation;