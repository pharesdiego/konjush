import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: 'input-shape box-shape w-100 h-100 d-flex'
})`
  background-color: white;
  border-bottom-right-radius: 0px !important;
  border-bottom-left-radius: 0px !important;
  & > input {
    flex: 1;
    border: 0;
    outline: 0;
    background-color: transparent;
    padding: 0px 15px;
    font-family: 'Cabin';
    font-size: 15px;
  }
`

const InputVerb = ({ inputValue, reactRef, inputValueUpdater }) => (
  <Container>
    <input
      value = { inputValue }
      placeholder = "Let's write a verb"
      ref = { reactRef }
      onInput = { event => inputValueUpdater(event.target.value) } />
  </Container>
); 

export default InputVerb;