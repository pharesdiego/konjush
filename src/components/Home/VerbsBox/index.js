import React, { Component } from 'react';
import Store from './../../../store/konjushStore';
import { Link } from 'react-router-dom';
import { boundReceiveURL } from './../../../boundedActions';
import Transition from './../../GlobalComponents/Transitions';
import { commonVerbs } from './../../../data/verbs';

const createKey = _ => parseInt(Math.random() * 100, 10);

class VerbsBox extends Component {

  constructor(props){
    super(props);
    this.state = {
      seeRecentVerbs: true
    }
  }

  shouldComponentUpdate(_, nextState){
    return (this.state.seeRecentVerbs !== nextState.seeRecentVerbs) && Store.getState().conjugator.recentVerbs.length > 0;
  }

  seeCommonVerbs = () => this.setState({ seeRecentVerbs: false });
  seeRecentVerbs = () => this.setState({ seeRecentVerbs: true });
  
  render(){
    const recentVerbs = Store.getState().conjugator.recentVerbs;
    // check if there are recent verbs and if the state say us to show them.
    let avaliableRecentVerbs = recentVerbs.length > 0 && this.state.seeRecentVerbs;

    let verbsWithLinks = (avaliableRecentVerbs ? recentVerbs : commonVerbs)
                            .map((verb, i) => <LinkToVerb verb={ verb } index={i} key={verb + createKey()} />)

    return (
      <div className='tab-container w-100 d-flex'>
        <div className='tab-content box-shape w-100 h-100 d-flex dir-column'>
  
          <div className='tabs d-flex'>
            <div 
              className={ 'tab d-flex justify-center align-content-center' + (avaliableRecentVerbs ? ' tabhome--active' : '') }
              onClick = { () => this.seeRecentVerbs() }
              children = 'Recent Verbs' />

            <div 
              className={'tab d-flex justify-center align-content-center' + (avaliableRecentVerbs ? '' : ' tabhome--active')}
              onClick = { () => this.seeCommonVerbs() }
              children = 'Common Verbs' />

          </div>
  
          <div
            className='tab-info white-scroll'
            children = { verbsWithLinks } />
        </div>
      </div>
    )
  }
};

const LinkToVerb = props => {
  const { index, verb } = props;
  let url = '/conjugation/' + verb;

  return (
    <Transition duration={200} delay={ index * 5 }>
      <div className='common-verb-container animation-up'>
        <Link 
          to = {url}
          onClick = { _ => boundReceiveURL(url) }
          children = { verb } />
      </div>
    </Transition>
  )
}

export default VerbsBox;