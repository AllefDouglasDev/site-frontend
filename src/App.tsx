import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Project from './pages/Project';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/projects" component={Project} />
      </Switch>
    </Router>
  );
}

export default App; 