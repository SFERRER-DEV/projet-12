import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { UserProvider } from '../../utils/context/api-http';
import { UserProviderMock } from '../../utils/context/api-http-mock';
import HomeMenu from '../../components/Home';
import DemoMenu from '../../components/Demo';

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
 * @description Page profil de l'utilisateur
 * @returns {JSX.Element} Page profil
 */
function ProfilePage() {
  /** @typedef{boolean} haveToMock Etat du mock des données descend par les props des composants enfants */
  /** @typedef{Function} setHaveToMock Fonction de mise à jour pour remonter l'état du mock des données depuis le composant enfant Error */
  /** @type {[haveToMock, setHaveToMock]} */
  const [haveToMock, setHaveToMock] = useState(false);

  /**
   * @typedef {Object} params
   * @property {number} id L'identifiant d'un utilisateur obtenu depuis la route
   */
  /** @type {params} */
  const { id } = useParams();

  if (isNaN(parseInt(id))) {
    // Nettoyer, cette erreur d'identifiant est traité dans le hook fetchData
    window.localStorage.removeItem('userId');
  } else {
    // Mémoriser localement l'identifiant de l'utilisateur
    window.localStorage.setItem('userId', id);
  }

  console.log(`${Date.now()} - State haveToMock = ${haveToMock}`);

  return (
    <Container className="profilpage">
      {haveToMock ? (
        /** Utiliser le provider pour se connecter au contexte des données mockées dans le fichier local */
        <UserProviderMock>
          <HomeMenu haveToMock={haveToMock} setHaveToMock={setHaveToMock} />
        </UserProviderMock>
      ) : (
        /** Utiliser le provider pour se connecter au contexte des données cherchées sur le backend */
        <UserProvider>
          <HomeMenu haveToMock={haveToMock} setHaveToMock={setHaveToMock} />
        </UserProvider>
      )}
    </Container>
  );
}

export default ProfilePage;
