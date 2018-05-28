import React, { Component } from 'react';
import './index.css';

class InputVerb extends Component {

  writingHandler = (event) => {
    console.log(this.input.value)
  }

  render(){
    return (
      <input
        placeholder='lets write'
        onInput={ this.writingHandler }
        ref={i => this.input = i}
      />
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
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default Conjugation;