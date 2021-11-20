import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Counter from './Components/Counter/Counter';
import { createStore } from "redux";
import { Provider } from 'react-redux';
import reducer from './Reduces';

const store = createStore(reducer);

ReactDOM.render(
      <Provider store={store}> 
        <Router>
            <Switch>
              <Route exact path="/" component={App}/>
              <Route exact path="/counter" component={Counter}/>
            </Switch>
        </Router>
      </Provider>,
  document.getElementById('root')
);
