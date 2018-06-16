import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import MenuBar from './components/MenuBar';
import Conjugation from './pages/Conjugation';
import Learn from './pages/Learn';
import About from './pages/About';
import Home from './pages/Home';
import Settings from './pages/Settings';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className='gradient' />
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