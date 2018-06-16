import React, { Component } from 'react';
import styled from 'styled-components';
import classNames from 'classnames';
import Transition from './../Transition';
import TogglerArrows from './TogglerArrows';
import TogglerTitle from './TogglerTitle';
import TogglerVisibility from './TogglerVisibility';

const Wrapper = styled.div`
  width: 100%;
  &:not(:last-child){
    margin-bottom: 10px;
  }
  &:first-child span:first-child,
  &:last-child span:last-child {
    opacity: 0.3;
    pointer-events: none;
  }
`

const Box = styled.div`
  background-color: white;
  height: 45px;
  display: inline-block;
  min-width: 250px;
  transition: all 200ms cubic-bezier(0, 0, 0, 0.93);
`

class Toggler extends Component {

  shouldComponentUpdate(nextProps){
    return (this.props.visible !== nextProps.visible) || this.props.index !== nextProps.index
  }

  render(){
    const { index, visible, title, tense } = this.props
    const activeTogglerStyle = classNames('box-shape w-100', { 'toggler--off': !visible })
  
    return (
      <Transition duration={200} delay={ index * 10 }>
        <Wrapper>
          <Box className= { activeTogglerStyle }>
            <TogglerArrows index={ index } />
            <TogglerTitle title={ title } />
            <TogglerVisibility tense={ tense } />
          </Box>
        </Wrapper>
      </Transition>
    )
  }
}

export default Toggler;