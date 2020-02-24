import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import GlobalStyle from './styles/global';

import Main from './pages/Main';
import Portfolio from './pages/Portfolio';

const App: React.FC = () => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path="/" component={Main} />
        <Route path="/portfolio" component={Portfolio} />
      </Switch>
    </Router>
  );
}

export default App; 