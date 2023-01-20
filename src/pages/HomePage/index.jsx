import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Route,
  Switch,
  useRouteMatch,
} from 'react-router-dom';
import styled from 'styled-components';
import { ButtonWrapper } from '../../utils/style/Atoms';
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
  /** @type {boolean} Est-ce que les données doivent être mockées ? */
  const haveToMock = parseInt(window.localStorage.getItem('haveToMock')) || 0;
  /**  @typedef {boolean} reload Un State à basculer pour re render le composant */
  const [reload, setReload] = useState(false);

  useEffect(() => {
    console.log(`Reload ${reload}`);
  }, [reload]);

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
      {/** Le bouton pour supprimer le mock des données */}
      {haveToMock === 1 ? (
        <div>
          <ButtonWrapper>
            <h2>Les données sont mockées</h2>
            <button
              onClick={() => {
                // Permet de tenter d'utiliser le backend à nouveau
                window.localStorage.removeItem('haveToMock');
                setReload(true);
              }}
            >
              Cliquer pour enlever le mock
            </button>
          </ButtonWrapper>
        </div>
      ) : (
        <ButtonWrapper>
          <h2>Les données ne sont pas mockées</h2>
        </ButtonWrapper>
      )}
    </Container>
  );
}

export default HompePage;
