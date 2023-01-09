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
        <Route exact path="/">
          {/* <Dashboard /> */}
        </Route>
        <Route exact path="/dashboard/">
          <Dashboard menu="Accueil" />
        </Route>
        <Route path="/dashboard/home/:id">
          <Dashboard menu="Accueil" />
        </Route>
        <Route path="/dashboard/recovery">
          <Dashboard menu="Récupération" />
        </Route>
        <Route path="/dashboard/swimming">
          <Dashboard menu="Natation" />
        </Route>
        <Route path="/dashboard/cycling">
          <Dashboard menu="Cyclisme" />
        </Route>
        <Route path="/dashboard/training">
          <Dashboard menu="Entrainement" />
        </Route>
        <Route path="/profile">
          <DemoPage pageName="Profil" />
        </Route>
        <Route path="/setting">
          <DemoPage pageName="Réglages" />
        </Route>
        <Route path="/community">
          <DemoPage pageName="Communauté" />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  </React.StrictMode>
);
