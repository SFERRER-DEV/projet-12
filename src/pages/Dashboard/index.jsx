import React, { useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { UserProvider } from '../../utils/context/api-http';
import { UserProviderMock } from '../../utils/context/api-http-mock';
import HomeMenu from '../../components/HomeMenu';
import DemoMenu from '../../components/DemoMenu';

/** @type {Object} Le contenu principal de la page est dans une balise `<main>` */
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
 * @description Page tableau de bord: Accueil utilisateur
 * @param {Object} props
 * @param {string} props.menu Le nom du tableau de bord sélectionné dans le menu
 * @returns {JSX.Element} La page d'accueil du tableau de bord
 */
function Dashboard(props) {
  const { menu } = props;
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

  /** @type {Object} l'emplacement actuel */
  const location = useLocation();

  /** @type {boolean} isHomeMenu La route actuelle est-elle celle de l'accueil du tableau de bord ? */
  const isHomeMenu = location.pathname
    .toLowerCase()
    .startsWith('/dashboard/home/');

  console.log(`${Date.now()} - State haveToMock = ${haveToMock}`);

  return (
    <Container>
      {haveToMock ? (
        /** Utiliser le provider pour se connecter au contexte des données mockées dans le fichier local */
        <UserProviderMock>
          {isHomeMenu ? (
            <HomeMenu haveToMock={haveToMock} setHaveToMock={setHaveToMock} />
          ) : (
            <DemoMenu
              haveToMock={haveToMock}
              setHaveToMock={setHaveToMock}
              menu={menu}
            />
          )}
        </UserProviderMock>
      ) : (
        /** Utiliser le provider pour se connecter au contexte des données cherchées sur le backend */
        <UserProvider>
          {isHomeMenu ? (
            <HomeMenu haveToMock={haveToMock} setHaveToMock={setHaveToMock} />
          ) : (
            <DemoMenu
              haveToMock={haveToMock}
              setHaveToMock={setHaveToMock}
              menu={menu}
            />
          )}
        </UserProvider>
      )}
    </Container>
  );
}

export default Dashboard;
