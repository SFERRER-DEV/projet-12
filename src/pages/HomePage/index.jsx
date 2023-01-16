import React, { useState } from 'react';
import {
  BrowserRouter as Route,
  Switch,
  useParams,
  useRouteMatch,
} from 'react-router-dom';

import styled from 'styled-components';
import { UserProvider } from '../../utils/context/api-http';
import { UserProviderMock } from '../../utils/context/api-http-mock';
import Home from '../../components/Home';
import Demo from '../../components/Demo';

/** @type {Object} Le contenu principal de la page est dans une balise `<main>` à positionner dans une Grid */
const Container = styled.main`
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-row: auto / span 2;
`;

/**
 * @description Page accueil du tableau de bord
 * @returns {JSX.Element} La page d'accueil du tableau de bord
 */
function HompePage() {
  let { path } = useRouteMatch();

  return (
    <Container className="homepage">
      <h1>Home Page</h1>
      <Switch>
        {/** Menus de démo */}
        <Route exact path={`${path}/recovery`}>
          <Demo menu="Récupération" />
        </Route>
        <Route exact path={`${path}/swimming`}>
          <Demo menu="Natation" />
        </Route>
        <Route exact path={`${path}/cycling`}>
          <Demo menu="Cyclisme" />
        </Route>
        <Route exact path={`${path}/training`}>
          <Demo menu="Entraînement" />
        </Route>
      </Switch>
    </Container>
  );
}

export default HompePage;
