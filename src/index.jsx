import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DemoPage from './pages/DemoPage';
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
        <Route path="/dashboard/home/:id">
          <Dashboard menu="Accueil" />
        </Route>
        <Route path="/dashboard/recovery/:id">
          <Dashboard menu="Récupération" />
        </Route>
        <Route path="/dashboard/swimming/:id">
          <Dashboard menu="Natation" />
        </Route>
        <Route path="/dashboard/cycling/:id">
          <Dashboard menu="Cyclisme" />
        </Route>
        <Route path="/dashboard/training/:id">
          <Dashboard menu="Entrainement" />
        </Route>
        <Route path="/profile/:id">
          <DemoPage pageName="Profil" />
        </Route>
        <Route path="/setting/:id">
          <DemoPage pageName="Réglages" />
        </Route>
        <Route path="/community/:id">
          <DemoPage pageName="Communauté" />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  </React.StrictMode>
);
