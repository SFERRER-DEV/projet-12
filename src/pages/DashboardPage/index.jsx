import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { UserProvider } from '../../utils/context/api-http';
import { useParams } from 'react-router-dom';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Profile from '../../components/Profile';
/** @typedef {import('../../utils/context/typedef').UserContext} Context Raccourci pour importer des types des propriétés JSON */

/**
 * @description Page profil de l'utilisateur
 * @returns {JSX.Element} Page profil
 */
function ProfilePage({ defaultId }) {
  const haveToMock = parseInt(window.localStorage.getItem('haveToMock')) || 0;

  /**  @typedef {number} userId Est le param id du routing casté en un nombre */
  const [userId, setUserId] = useState(defaultId);

  /**
   * @typedef {Object} params
   * @property {number} id L'identifiant d'un utilisateur obtenu depuis la route
   */
  /** @type {params} */
  const { id } = useParams();

  useEffect(() => {
    if (Number(id) !== undefined && !isNaN(Number(id))) {
      setUserId(Number(id));
    } else {
      setUserId(Number(defaultId));
    }
  }, [id, defaultId]);

  console.log(
    `${Date.now()} - ProfilePage - userId ${userId}, haveToMock ? ${haveToMock}`
  );

  return (
    <React.Fragment>
      <Menu userId={userId} />
      <UserProvider userId={userId}>
        <Header userId={userId} />
        {/** Le contenu principal de la page est dans une balise `<main>` à positionner dans la 1ere Grid sur #root */}
        <main className="dashboard">
          <Profile userId={userId} />
        </main>
      </UserProvider>
    </React.Fragment>
  );
}

ProfilePage.propTypes = {
  defaultId: PropTypes.number,
};

ProfilePage.defaultProps = {
  defaultId: 12, // Karl est l'utilisateur par défaut pour la démo
};

export default ProfilePage;
