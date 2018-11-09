import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Home from './components/Home';
import Nav from './components/Nav';
import Portfolio from './components/Portfolio';
import About from './components/About';
import * as serviceWorker from './serviceWorker';

const AppRouter = () => (
  <Router>
    <App>
      <Route component={Nav} />
      <Route exact path="/" component={Home} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={About} />
    </App>
  </Router>
);

ReactDOM.render(<AppRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
