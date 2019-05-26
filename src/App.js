import React, {Component} from 'react';
import './App.css';

import Form from './containers/Form/Form'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Switch>
            <Route path="/" component={Form} />
          </Switch>
        </div>
      </BrowserRouter>
      
    );
  } 
}

export default App;
