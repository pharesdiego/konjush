import React from 'react';
import styled from 'styled-components';
import Layout from  './../components/Layout';
import Section from  './../components/Section';
import Transition from './../components/Transition';
import { LearnData } from './../data/views';

const ResourcesContainer = styled.div.attrs({
  className: 'w-100 gray-scroll'
})`
  overflow-y: auto;
  overflow-x: hidden;
  @media (min-width: 768px){
    width: 50% !important;
  }
`

const Learn = props => {

  const resources = LearnData.resources.map(
    ({name, type, info, url}) => <Resource
                                      key={name}
                                      name={name}
                                      type={type}
                                      info={info}
                                      url={url}
                                    />
  )

  return (
    <Layout section='learn' addedClass='d-flex align-items-center'>
      <Section title='Learning Turkish' subtitle='resources' />
      <ResourcesContainer children={ resources } />
    </Layout>
  )
}

const Box = styled.div.attrs({
  className: 'box-shape'
})`
  background-color: white;
  padding: 10px;
  & a {
    color: black;
  }
  &:not(:last-child){
    margin-bottom: 15px;
  }
  & p:not(:last-child){
    margin-bottom: 5px;
  }
  & p:first-child{
    font-size: 20px;
  }
  & p:last-child{
    font-weight: bold;
  }

`

const Resource = ({ name, info, index, url, type }) => {
  return (
    <Transition duration={200} delay={index * 10}>
      <Box>
        <p>{ name }</p>
        <p>{ info }</p>
        <p><a href={ url } target='blank'>{ type }</a></p>
      </Box>
    </Transition>
  )
};


export default Learn;