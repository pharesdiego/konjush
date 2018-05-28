import React, { Component } from 'react';
import './index.css';


let input;
const updateInputValue = value => input.value = value;

const InputVerb = props => (
  <input
    placeholder='lets write'
    onInput={ () => updateInputValue(input.value) }
    onFocus={  }
    onBlur={  }
    ref={i => input = i}
  />
)

const putLetterOnInputValue = letter => () => updateInputValue(input.value + letter);


class InputVerbManager extends Component {
  constructor(props){
    super(props);
    this.input = false;
  }

  onInputHandler = () => {
    
  }


  render(){
    return(
      <div className='conjugation-input box-shape input-shape w-100 h-100 d-flex'>
        <InputVerb 
          onInputHandler = { onInputHandler }
          onFocusHandler = { onFocusHandler }
          onBlurHandler = { onBlurHandler }
          inputElement = { this.input }
        />
      </div>
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
            <div className='conjugation-input box-shape input-shape w-100 h-100 d-flex'>
              <InputVerb />
            </div>

            <div className='helpers-letter'>
              {
                ['ş', 'ğ', 'ı', 'ç', 'ü', 'ö']
                  .map(letter => (
                    <span
                      onClick={ putLetterOnInputValue(letter) }
                    > 
                      { letter } 
                    </span>
                  ))
              }
            </div>

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