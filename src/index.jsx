import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Header from './components/Header';
import Menu from './components/Menu';
import Copyright from './components/Copyright';
import './styles/index.css';
import GlobalStyle from './utils/style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Header />
      <Menu />
      <Copyright />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path={['Profile', 'Setting', 'Community']}>
          <Home />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  </React.StrictMode>
);
