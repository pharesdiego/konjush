import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Conjugation from './components/Conjugation';
import Learn from './components/Learn';
import Options from './components/Options';
import About from './components/About';
import MenuBar from './components/GlobalComponents/MenuBar';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className='gradient'></div>
        <Switch>
          <Route exact path='/conjugation' component={ Conjugation }/>
          <Route exact path='/learn' component={ Learn }/>
          <Route exact path='/options' component={ Options }/>
          <Route exact path='/about' component={ About }/>
          <Route path='/' component={ Home }/>
        </Switch>
        <MenuBar />
      </div>
    );
  }
}

export default App;