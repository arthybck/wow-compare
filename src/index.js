import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Stats from './Stats';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/stats" component={Stats} />
    </div>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
