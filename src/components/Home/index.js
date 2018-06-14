import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import createSection from './../GlobalComponents/ComponentSection';
import VerbsBox from './VerbsBox';

const FakeInput = props => (
  <div className='fake-input d-flex justify-center align-items-center w-100'>
    <Link to='/conjugation' className='fake-input-container input-shape box-shape w-100 h-100 d-flex'>
        <div
          className='w-100 d-flex justify-center align-items-center'
          children='Write a verb' />
    </Link>
  </div>
);

const KonjushIntro = props => (
    <div className='konjush-intro d-flex justify-center'>
      <div className='w-100 d-flex justify-center dir-column'>
        <h1 children='Konjüsh' />
        <p children='turkish conjugator' />
      </div>
    </div>
);

let HomeComponent = createSection({
  section: 'home',
  addedClass: 'd-flex align-items-center'
})

const Home = (props) => {
  return (
    <HomeComponent>
      <KonjushIntro/>
      <FakeInput/>
      <VerbsBox/>
    </HomeComponent>
  )
};

export default Home;