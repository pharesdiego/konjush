import React, { Component } from 'react';
import { verify } from 'turkish-conjugator';

class InputBoxManager extends Component {
  constructor(props){
    super(props);
    this.inputElement = React.createRef();
    this.state = {
      inputValue: '',
      isReady: false
    }
  }
  componentDidMount(){
    window.location.pathname === '/conjugation' && this.inputElement.current.focus();
    this.setState({ isReady: true });
  }

  inputValueUpdater = (value) => {
    this.setState({ inputValue: value })
    this.setRouteToNewVerbAndCleanInput(verify.isTurkishVerb(value));
  }

  setRouteToNewVerbAndCleanInput = (verb) => {
    if(verb){
      this.inputElement.current.blur();
      this.setState({ inputValue: '' });
      this.props.verbRouteManager(verb);
    }
  }

  render(){
    return(
      <div className='conjugation-input-container w-100'>

          <InputVerb 
            inputValue = { this.state.inputValue }
            inputValueUpdater = { this.inputValueUpdater }
            reactRef = { this.inputElement }
          />

          {
            this.state.isReady &&
            <LetterHelpers
              inputValue = { this.state.inputValue }
              inputValueUpdater = { this.inputValueUpdater }
              inputElement = { this.inputElement.current }
            />
          }
      </div>
    )
  }
}

const InputVerb = props => (
  <div className='conjugation-input box-shape input-shape w-100 h-100 d-flex'>
    <input
      value = { props.inputValue }
      placeholder = "Let's write a verb"
      ref = { props.reactRef }
      onInput = { event => props.inputValueUpdater(event.target.value) }
    />
  </div>
); 

const LetterHelpers = props => (
  <div className='helpers-letter box-shape'>
    {
      ['ş', 'ğ','ç','ı', 'ü', 'ö']
        .map((letter,i) => (
          <span 
            onClick={() => {
                props.inputValueUpdater(props.inputValue + letter);
                props.inputElement.focus();
              }}
            key = { i }
          > 
            { letter } 
          </span>
        ))
    }
  </div>
);

export default InputBoxManager;