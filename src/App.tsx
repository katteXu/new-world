import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from './pages/home';
import User from './pages/user';
interface AppProps { }

function App({ }: AppProps) {
  return (
    <Router >
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/user" component={User} />
      </Switch>
    </Router>
  );
}

export default App;
