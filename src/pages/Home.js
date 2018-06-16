import React from 'react';
import styled from 'styled-components';
import Layout from  '../components/Layout';
import VerbsBox from './../components/VerbsBox';
import FakeInput from './../components/FakeInput';

const Konjush = styled.div.attrs({
  className: 'd-flex justify-center'
})`
  & > div > * {
    text-align: center;
  }
  & h1 {
    font-size: calc(32px + 3.5vw);
    font-family: 'Pacifico';
  }
  & p {
    font-size: 20px;
  }
`

const Container = styled.div.attrs({
  className: 'w-100 d-flex justify-center dir-column'
})``

const Home = (props) => {
  return (
    <Layout section='home' addedClass='d-flex align-items-center' isHome={true}>

      <Konjush>
        <Container>
          <h1 children='Konjüsh' />
          <p children='turkish conjugator' />
        </Container>
      </Konjush>

      <FakeInput />

      <VerbsBox />
    </Layout>
  )
};

export default Home;