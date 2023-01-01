import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
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
        {/** page accueil order route #1 */}
        <Route path="/dashboard/home/:id">
          <HomePage />
        </Route>
        {/** page accueil ordre route #2 */}
        <Route path="/dashboard/home/">
          <HomePage />
        </Route>
        {/** page profil ordre route #1 */}
        <Route path="/dashboard/profile/:id">
          <ProfilePage />
        </Route>
        {/** page profil ordre route #2 */}
        <Route path="/dashboard/profile/">
          <ProfilePage />
        </Route>
        {/** Pages de démo*/}
        <Route path="/dashboard/setting/:id">
          <DemoPage pageName="Réglages" />
        </Route>
        <Route path="/dashboard/setting/">
          <DemoPage pageName="Réglages" />
        </Route>
        <Route path="/dashboard/community/:id">
          <DemoPage pageName="Communauté" />
        </Route>
        <Route path="/dashboard/community/">
          <DemoPage pageName="Communauté" />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  </React.StrictMode>
);
