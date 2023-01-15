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
        <Route exact path="/Dashboard/">
          <Dashboard pageName="Tableau de bord - Home" />
        </Route>
        <Route path="/Dashboard/Home">
          <Dashboard pageName="Tableau de bord - Home" />
        </Route>
        <Route path="/Dashboard/Recovery">
          <DemoPage pageName="Tableau de bord - Récupération" />
        </Route>
        <Route path="/Dashboard/Swimming">
          <DemoPage pageName="Tableau de bord - Natation" />
        </Route>
        <Route path="/Dashboard/Cycling">
          <DemoPage pageName="Tableau de bord - Cyclisme" />
        </Route>
        <Route path="/Dashboard/Training">
          <DemoPage pageName="Tableau de bord - Entrainement" />
        </Route>
        <Route path="/Profile">
          <DemoPage pageName="Profil" />
        </Route>
        <Route path="/Setting">
          <DemoPage pageName="Réglages" />
        </Route>
        <Route path="/Community">
          <DemoPage pageName="Communauté" />
        </Route>
        <Route path="*"></Route>
      </Switch>
    </Router>
  </React.StrictMode>
);
