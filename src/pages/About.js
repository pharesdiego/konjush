import React from 'react';
import styled from 'styled-components';
import Layout from  '../components/Layout';
import Section from  '../components/Section';
import Transition from './../components/Transition';
import { AboutData } from './../data/views';

const MissionContainer = styled.div.attrs({
  className: 'w-100 box-shape gray-scroll'
})`
  overflow-y: auto;
  background-color: white;
  padding: 25px;
  @media (min-width: 768px){
    width: 50% !important;
  }
`

const Wrapper = styled.div`
  h1 {
    font-family: 'Pacifico';
  }
  a {
    font-weight: bold;
    color: black;
  }
  p:not(:last-child){
    margin-bottom: 10px;
  }
`

const Links = styled.div`
  justify-content: space-around;
  display: flex;
  a {
    width: 40%;
    padding: 10px;
    min-width: 85px;
  }
`

const About = props => {

  const missionHTML = AboutData.mission.split('___').reduce((a, pharagraph) => a + `<p>${pharagraph}</p>`, '');

  return (
    <Layout section='about' addedClass='d-flex align-items-center'>
      <Section title='About' subtitle='mission & how to contribute' />
      <Transition duration={200} delay={0}>

        <MissionContainer>
          <Wrapper>
            <h1>Konjüsh mission</h1>
            <p 
              dangerouslySetInnerHTML = {{  __html: missionHTML  }} />
  
            <Links>
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
            </Links>
          </Wrapper>
        </MissionContainer>

      </Transition>
    </Layout>
  )
}

export default About;