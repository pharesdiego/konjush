import React, { Component } from 'react';
import { verify } from 'turkish-conjugator';
import InputVerb from './InputBoxManager/InputVerb';
import LetterHelpers from './InputBoxManager/LetterHelpers';

class InputBoxManager extends Component {
  constructor(props){
    super(props);
    this.inputElement = React.createRef();
    this.state = { inputValue: '', isReady: false }
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

export default InputBoxManager;