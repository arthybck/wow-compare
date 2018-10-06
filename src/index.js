import React from 'react';
import ReactDOM from 'react-dom';
import './Style/index.css';
import App from './App';
import Boss from './Boss';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter as Router, Route } from 'react-router-dom'

const Root = () => (
  <Router>
    <div>
      <Route exact path="/" component={App} />
      <Route exact path="/boss" component={Boss} />
    </div>
  </Router>
)

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
