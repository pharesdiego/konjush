import React from 'react';
import './componentSection.css';
const ComponentSection = ({ section, addedClass = ''}) => ({ children }) => (
  <div className='component'>
    <div className='component-main'>
      <div className={section + '-main-body content-body'}>
        <div className={ section + '-sections component-body-section ' + addedClass}>
          { children }
        </div>
      </div>
    </div>
  </div>
);

export default ComponentSection;