import React, { Component } from 'react';
import createSection from  './../GlobalComponents/ComponentSection';
import createSectionDescription from './../GlobalComponents/ComponentDescription';
import Togglers from './Togglers';
import './settings.css';


let SettingsComponent = createSection({
  section: 'settings',
  addedClass: 'd-flex align-items-center'
});

let SettingsComponentDescription = createSectionDescription({
  title: 'Settings',
  subtitle: 'tenses & order'
});

const Settings = props => (
  <SettingsComponent>
    <SettingsComponentDescription/>
    <Togglers />
  </SettingsComponent>
)



export default Settings;