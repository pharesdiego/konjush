import React from 'react';
import styled from 'styled-components';

const Container = styled.div.attrs({
  className: 'box-shape'
})`
  background-color: white;
  border-top-left-radius: 0px !important;
  border-top-right-radius: 0px !important;
  padding: 2px;

  & > span {
    padding: 0px 5px;
    font-size: 20px;
    cursor: pointer;
  }
  & > span:not(:last-child) {
    margin-right: 5px;
  }
`


const LetterHelpers = ({ inputValue, inputElement, inputValueUpdater }) => {

  const spansOfLetters = ['ş', 'ğ','ç','ı', 'ü', 'ö']
    .map(
      letter => <span
                    key = {letter}
                    children = {letter}
                    onClick={() => {
                      inputValueUpdater(inputValue + letter);
                      inputElement.focus();
                    }}
                  />
  )

  return (
    <Container>
      { spansOfLetters }
    </Container>
  )
}

export default LetterHelpers;