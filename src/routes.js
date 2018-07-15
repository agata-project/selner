import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from './App';
import Courses from './components/Courses';
import Events from './components/Events';
import Talks from './components/Talks';

const routes = (
  <Router>
    <div>
      <Route exact path='/' component={App} />
      <Route path='/courses' component={Courses} />
      <Route path='/events' component={Events} />
      <Route path='/talks' component={Talks} />
    </div>
  </Router>
);

export default routes;
