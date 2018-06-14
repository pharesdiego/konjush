import React, { Component } from 'react';
import Store from './../../../store/konjushStore';
import { boundSettingOrder, boundSettingToggleVisibility } from './../../../boundedActions/';
import { ArrowIcon, ViewIcon } from '../../GlobalComponents/Icons';
import Transition from './../../GlobalComponents/Transitions';
import FlipMove from 'react-flip-move';

class Togglers extends Component {
                                                                                      
  render(){
    let togglers = Store.getState().settings.map(({ title, tense, visible }, index) => <Toggler 
                                                                                          title = {title}
                                                                                          tense = {tense}
                                                                                          visible = {visible} 
                                                                                          key={tense}
                                                                                          index={index} />);

    return (
        <div className='settings-togglers-container w-100 gray-scroll'>
          <div className='settings-togglers'>
            <FlipMove
              duration={200}
              staggerDurationBy={200}
              easing='cubic-bezier(0, 0, 0, 0.93)'
              children = { togglers } />
          </div>
        </div>
    )
  }
}

const TogglerArrows = props => {
  const { index } = props;
  let arrowSpans = [-1, 1].map((n, i) => <span 
                                            key= {i} 
                                            className = 'd-flex justify-center'
                                            onClick = { _ => boundSettingOrder({ from: index, to: index + n}) }
                                            children = { <ArrowIcon /> }
                                          />)

  return (
    <div
      className='toggler-arrows d-flex dir-column'
      children = { arrowSpans } />
  )
}

class TogglerTitle extends Component {
  render(){
    return(
      <div className='toggler-tense d-flex justify-center'>
        <div 
          className='d-flex justify-center align-items-center w-100 h-100'
          children = { this.props.title }
        />
      </div>
    )
  }
};

const TogglerVisibility = props => (
  <div 
    className = 'toggler-switch d-flex justify-center align-items-center'
    onClick = { () => boundSettingToggleVisibility(props.tense) }
    children = { <ViewIcon /> } 
  />
);

class Toggler extends Component {

  shouldComponentUpdate(e){
    return true
  }

  render(){
    const { index, visible, title, tense } = this.props
    let activeTogglerClass = 'toggler box-shape w-100' + ( visible ? '' : ' toggler--off' )
  
    return (
      <Transition duration={200} delay={ index * 10 }>
        <div className='w-100 toggler-wrapper'>
          <div className= { activeTogglerClass }>
            <TogglerArrows index={ index } />
            <TogglerTitle title={ title } />
            <TogglerVisibility tense={ tense } />
          </div>
        </div>
      </Transition>
    )
  }
}


export default Togglers;