import React from 'react';
import './index.css';
import createSection from  './../GlobalComponents/ComponentSection';
import createSectionDescription from  './../GlobalComponents/ComponentDescription';
import Transition from './../GlobalComponents/Transitions';
import { LearnData } from './../../data/views';

let LearnComponent = createSection({
  section: 'learn',
  addedClass: 'd-flex align-items-center'
})

let LearnComponentDescription = createSectionDescription({
  title: 'Learning Turkish',
  subtitle: 'resources'
})

const Learn = props => {

  let resources = LearnData.resources.map(
    ({name, type, info, url}) => <Resource
                                      key={name}
                                      name={name}
                                      type={type}
                                      info={info}
                                      url={url}
                                    />
  )

  return (
    <LearnComponent>
      <LearnComponentDescription />
      <div
        className='resources-container w-100 gray-scroll'
        children={ resources } />
    </LearnComponent>
  )
}

const Resource = props => {

  const { name, info, index, url, type } = props;

  return (
    <Transition duration={200} delay={index * 10}>
      <div className='resource box-shape'>
        <p>{ name }</p>
        <p>{ info }</p>
        <p><a href={ url } target='blank'>{ type }</a></p>
      </div>
    </Transition>
  )
};


export default Learn;