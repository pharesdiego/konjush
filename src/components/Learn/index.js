import React from 'react';
import './index.css';
import createSection from  './../GlobalComponents/ComponentSection';
import createSectionDescription from  './../GlobalComponents/ComponentDescription';

let LearnComponent = createSection({
  section: 'learn',
  addedClass: 'd-flex align-items-center'
});

let LearnComponentDescription = createSectionDescription({
  title: 'Learning Turkish',
  subtitle: 'Facebook groups & Websites'
});
const Learn = props => (
  <LearnComponent>
    <LearnComponentDescription />
  </LearnComponent>
)


export default Learn;