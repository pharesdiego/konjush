import React from 'react';
import './home.css';
import { Link } from 'react-router-dom';
import createSection from './../GlobalComponents/ComponentSection';

const commonVerbs = ['gelmek', 'gitmek', 'girmek', 'konusmak', 'yasamak', 'sinirlenmek', 'gelmek', 'gitmek', 'girmek', 'konusmak', 'yasamak', 'sinirlenmek', 'gelmek', 'gitmek', 'girmek', 'konusmak', 'yasamak', 'sinirlenmek'];

const FakeInput = props => (
    <div className='fake-input d-flex justify-center align-items-center'>
      <Link to='/conjugation' className='fake-input-container input-shape box-shape w-100 h-100 d-flex'>
          <div className='w-100 d-flex justify-center align-items-center'>
            Write a verb
          </div>
      </Link>
    </div>
);

const KonjushIntro = props => (
  <div className='konjush-intro d-flex justify-center'>
    <div className='w-100 d-flex justify-center dir-column'>
      <h1>
        Konjüsh
      </h1>
      <p>
        turkish conjugator
      </p>
    </div>
  </div>
);

const VerbsBox = props => (
  <div className='tab-container w-100'>
      <div className='tab-content box-shape w-100 h-100'>

        <div className='tabs d-flex'>
          <div className='tab d-flex justify-center align-content-center'>
            Recent Verbs
          </div>
          <div className='tab d-flex justify-center align-content-center'>
            Common Verbs
          </div>
        </div>

        <div className='tab-info'>
          {
            commonVerbs.map((verb, i) => (<div className='common-verb-container' key={i}> { verb } </div>))
          }
        </div>

      </div>
    </div>
);
// home-main-body y home-sections pueden estar en un HOC y usar simplemente los children
let HomeComponent = createSection({
  section: 'home'
});

const Home = (props) => (
  <HomeComponent>
    <KonjushIntro/>
    <FakeInput/>
    <VerbsBox/>
  </HomeComponent>
)

export default Home;