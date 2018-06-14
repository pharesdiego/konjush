import React from 'react';
import createSection from  './../GlobalComponents/ComponentSection';
import createSectionDescription from  './../GlobalComponents/ComponentDescription';
import Transition from './../GlobalComponents/Transitions';
import { AboutData } from './../../data/views';
import './about.css';

let AboutComponent = createSection({
  section: 'about',
  addedClass: 'd-flex align-items-center'
});

let AboutComponentDescription = createSectionDescription({
  title: 'About',
  subtitle: 'mission & how to contribute'
})

const About = props => {

  const missionHTML = AboutData.mission.split('___').reduce((a, pharagraph) => a + `<p>${pharagraph}</p>`, '');

  return (
    <AboutComponent>
      <AboutComponentDescription/>
      <Transition duration={200} delay={0}>
        <div className='about-mission-container w-100 box-shape gray-scroll'>
          <div className='about-mission'>
            <h1>Konjüsh mission</h1>
            <p 
              dangerouslySetInnerHTML = {{  __html: missionHTML  }} />
  
            <div className='about-links-container d-flex'>
              <a
                className='box-shape d-flex justify-center align-items-center text-center'
                href='https://github.com/pharesdiego/konjush' 
                target='blank'
                children = 'Konjüsh' />
              <a
                className='box-shape d-flex justify-center align-items-center text-center'
                href='https://github.com/pharesdiego/turkish-conjugator'
                target='blank'
                children = 'turkish-conjugator' />
            </div>
            
          </div>
        </div>
      </Transition>
    </AboutComponent>
  )
}

export default About;