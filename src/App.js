import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Conjugation from './components/Conjugation';
import Learn from './components/Learn';
import Settings from './components/Settings';
import About from './components/About';
import MenuBar from './components/GlobalComponents/MenuBar';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='gradient'></div>
        <Switch>
          <Route path='/learn' component={ Learn }/>
          <Route path='/conjugation' component={ Conjugation }/>
          <Route path='/settings' component={ Settings }/>
          <Route path='/about' component={ About }/>
          <Route path='/' component={ Home }/>
        </Switch>
        <MenuBar />
      </div>
    );
  }
}

export default App;