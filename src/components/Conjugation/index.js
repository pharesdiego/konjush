import React, { Component, Fragment } from 'react';
import './index.css';


const InputVerb = props => (
  <input
    placeholder = "Let's write a verb"
    value = { props.inputValue }
    onInput = { event => props.inputValueUpdater(event.target.value) }
    onFocus = { props.onFocusHandler }
    onBlur = { props.onFocusHandler }
  />
)

const LetterHelpers = props => (
  <div className='helpers-letter'>
    {
      ['ş', 'ğ', 'ı', 'ç', 'ü', 'ö']
        .map(letter => (
          <span onClick={ () => props.inputValueUpdater(letter) } >
            { letter } 
          </span>
        ))
    }
  </div>
)

class InputBoxManager extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputValue: '',
      showHelpers: false
    }
  }

  inputValueUpdater = (value) => {
    this.setState({
      inputValue: value
    })
    console.log(this.state)
  }

  onFocusHandler = () => this.setState({ showHelpers: true })
  onBlurHandler = () => this.setState({ showHelpers: false })

  render(){
    return(
      <Fragment>
        <div className='conjugation-input box-shape input-shape w-100 h-100 d-flex'>
          <InputVerb 
            inputValueUpdater = { this.inputValueUpdater }
            onFocusHandler = { this.onFocusHandler }
            onBlurHandler = { this.onBlurHandler }
            inputValue = { this.inputValue }
          />
        </div>
        {
          this.state.showHelpers && 
            <LetterHelpers
              inputValueUpdater = { this.inputValueUpdater }
            />
        }
      </Fragment>
    )
  }
}


const Conjugation = props => (
  <div className='component'>
    <div className='component-main'>
      <div className='conjugation-main-body content-body'>
        {
           // aqui ira el aviso de informacion cargada
        }
        <div className='conjugation-sections component-body-section'>

          <div className='conjugation-input-container w-100'>
            
            <InputBoxManager />
            
          </div>

          <div className='verb-name w-100'>
            <p>Gelmek</p>
          </div>


        </div>
      </div>
    </div>
  </div>
)

export default Conjugation;