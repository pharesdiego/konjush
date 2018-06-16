import React from 'react';
import Layout from  './../components/Layout';
import Section from  './../components/Section';
import Togglers from './../components/Togglers';

const Settings = props => {
  return (
    <Layout section='settings' addedClass='d-flex align-items-center'>
      <Section title='Settings' subtitle='tenses & order' />
      <Togglers />
    </Layout>
  )
}

export default Settings;