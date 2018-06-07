import React, { Fragment, Component} from 'react';
import './componentDescription.css';

const componentDescription = ({title, subtitle}) => class extends Component {
  
  shouldComponentUpdate(){
    return false;
  }

  render(){
    return (
    <Fragment>
      <div className='section-title w-100'>
        <p>{ title }</p>
      </div>

      <div className='section-subtitle w-100'>
        <p>{ subtitle }</p>
      </div>
    </Fragment>
  )
  }
};

export default componentDescription;