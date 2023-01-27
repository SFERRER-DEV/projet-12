import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/DashboardPage';
import DemoPage from './pages/DemoPage';
import Copyright from './components/Copyright';

import './styles/index.css';
import GlobalStyle from './utils/style/GlobalStyle';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <GlobalStyle />
      <Copyright />
      <Switch>
        {/** L'accueil */}
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route exact path="/dashboard/">
          <HomePage />
        </Route>
        <Route exact path="/dashboard/home/">
          <HomePage />
        </Route>
        <Route path="/dashboard/home/:id">
          <HomePage />
        </Route>
        {/** Le profil utilisateur */}
        <Route exact path="/dashboard/profile/">
          <ProfilePage />
        </Route>
        <Route path="/dashboard/profile/:id">
          <ProfilePage />
        </Route>
        {/** Pages de démo*/}
        <Route exact path="/dashboard/setting/">
          <DemoPage pageName="Réglages" />
        </Route>
        <Route path="/dashboard/setting/:id">
          <DemoPage pageName="Réglages" />
        </Route>
        <Route exact path="/dashboard/community/">
          <DemoPage pageName="Communauté" />
        </Route>
        <Route path="/dashboard/community/:id">
          <DemoPage pageName="Communauté" />
        </Route>
      </Switch>
    </Router>
  </React.StrictMode>
);
//  <Route path="*">{/** Erreur */}</Route>
