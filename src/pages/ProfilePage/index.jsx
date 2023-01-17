import React, { useState } from 'react';
import { UserProvider } from '../../utils/context/api-http';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import Profile from '../../components/Profile';
/** @typedef {import('../../utils/context/typedef').UserContext} Context Raccourci pour importer des types des propriétés JSON */

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
  const haveToMock = parseInt(window.localStorage.getItem('haveToMock')) || 0;

  console.log(`${Date.now()} - ProfilePage: haveToMock ? ${haveToMock}`);

  /**  */
  const [reload, setReload] = useState(false);

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

  return (
    <UserProvider>
      <Container className="dashboard">
        <Profile reload={reload} setReload={setReload} />
      </Container>
    </UserProvider>
  );
}

export default ProfilePage;
