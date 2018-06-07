import React from 'react';
import createSection from  './../GlobalComponents/ComponentSection';
import createSectionDescription from  './../GlobalComponents/ComponentDescription';

let AboutComponent = createSection({
  section: 'about',
  addedClass: 'd-flex align-items-center'
});

let AboutComponentDescription = createSectionDescription({
  title: 'About',
  subtitle: 'How to contribute'
})

const About = props => (
  <AboutComponent>
    <AboutComponentDescription/>
  </AboutComponent>
)


export default About;