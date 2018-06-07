import React, { Component } from 'react';
import Store from './../../../store/konjushStore';
import { boundSettingOrder, boundSettingToggleVisibility } from './../../../boundedActions/';
import { ArrowIcon, ViewIcon } from '../../GlobalComponents/Icons';

const Togglers = props => (
  <div className='settings-togglers-container w-100'>
    <div className='settings-togglers'>
      {
        Store.getState().settings.map(
          ({ title, tense, visible }, index) => <Toggler
                                                  title = { title }
                                                  index = { index }
                                                  tense = { tense }
                                                  visible = { visible }
                                                  key = { tense }
                                                />
        )
      }
    </div>
  </div>
);

const TogglerArrows = props => (
  <div className='toggler-arrows d-flex dir-column'>
    {
      [-1, 1]
        .map( (N, i) => (
            <span
              key = {i}
              className = 'd-flex justify-center'
              onClick = { _ =>  boundSettingOrder({ from: props.index, to: props.index + N })} >
              <ArrowIcon/>
            </span>
          ))
    }
  </div>
);

const TogglerTitle = props => (
  <div className='toggler-tense d-flex justify-center'>
    <div className='d-flex justify-center align-items-center w-100 h-100'>
      { props.title }
    </div>
  </div>
);

const TogglerVisibility = props => (
  <div 
    className = 'toggler-switch d-flex justify-center align-items-center'
    onClick = { () => boundSettingToggleVisibility(props.tense) }
  >
    <ViewIcon />
  </div>
);

class NoUpdate extends Component {
  shouldComponentUpdate(){
    return false;
  }
  render(){
    return this.props.children;
  }
}
const Toggler = props => (
  <div className= { 'toggler box-shape w-100' + ( props.visible ? '' : ' toggler--off' ) }>
    <TogglerArrows index={ props.index }/>
    <NoUpdate>
      <TogglerTitle title={ props.title }/>
      <TogglerVisibility tense = { props.tense }/>
    </NoUpdate>
  </div>
);
export default Togglers;