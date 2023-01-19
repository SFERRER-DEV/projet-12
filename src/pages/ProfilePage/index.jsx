import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { UserProvider } from '../../utils/context/api-http';
import { UserProviderMock } from '../../utils/context/api-http-mock';
import Profile from '../../components/Profile';

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
  /** @typedef{boolean} haveToMock Etat du mock des données */
  const [haveToMock, setHaveToMock] = useState(false);
  console.log(`${Date.now()} - ProfilePage: haveToMock ?${haveToMock}`);

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

  return haveToMock ? (
    <UserProviderMock haveToMock={haveToMock}>
      <Container className="profilpage">
        <Profile haveToMock={haveToMock} setHaveToMock={setHaveToMock} />
      </Container>
    </UserProviderMock>
  ) : (
    <UserProvider haveToMock={haveToMock}>
      <Container className="profilpage">
        <Profile haveToMock={haveToMock} setHaveToMock={setHaveToMock} />
      </Container>
    </UserProvider>
  );
}

export default ProfilePage;
