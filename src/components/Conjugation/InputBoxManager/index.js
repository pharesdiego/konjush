import React, { Component } from 'react';
import { verify } from 'turkish-conjugator';

class InputBoxManager extends Component {
  constructor(props){
    super(props);
    this.inputElement = null;
    this.isReady = false;
    this.state = {
      inputValue: '',
      isReady: false
    }
  }

  componentDidMount(){
    this.setState({
      isReady: true
    })
  }

  inputValueUpdater = (value) => {
    this.inputElement.value = value;
    this.setState({
      inputValue: this.inputElement.value
    })
    // verify that the passed verb is correct
    if(verify.isVerb(value)){
      this.props.verbRouteManager(value);
      this.inputElement.value = '';
      this.setState({
        inputValue: this.inputElement.value
      })
    }
  }

  getInputElement = element => this.inputElement = element;

  render(){
    return(
      <div className='conjugation-input-container w-100'>

        <div className='conjugation-input box-shape input-shape w-100 h-100 d-flex'>
          <InputVerb 
            inputValueUpdater = { this.inputValueUpdater }
            inputValue = { this.inputValue }
            getInputElement = { this.getInputElement }
          />
        </div>

        { 
          this.state.isReady && 
          <LetterHelpers
            inputValueUpdater = { this.inputValueUpdater }
            inputElement = { this.inputElement }
          />
        }
      </div>
    )
  }
}

const InputVerb = props => (
  <input
    value = { props.inputValue }
    placeholder = "Let's write a verb"
    ref = { element => props.getInputElement(element) }
    onInput = { event => props.inputValueUpdater(event.target.value) }
  />
)

const LetterHelpers = props => (
  <div className='helpers-letter box-shape'>
    {
      ['ş', 'ğ','ç','ı', 'ü', 'ö']
        .map((letter,i) => (
          <span 
          onClick={() => {
              props.inputValueUpdater(props.inputElement.value + letter)
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