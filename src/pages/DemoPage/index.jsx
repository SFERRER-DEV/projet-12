import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../../components/Header';
import Menu from '../../components/Menu';

/**
 * Page de démo pour les autres routes
 * @returns {JSX.Element} Page demo
 */
function DemoPage({ defaultId, pageName }) {
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

  console.log(`${Date.now()} - DemoPage - userId ${userId}}`);

  return (
    <React.Fragment>
      <Header userId={userId} />
      <Menu userId={userId} />
      <main className="homepage">
        <h1>{pageName}</h1>
        <h2>Page démo</h2>
      </main>
    </React.Fragment>
  );
}

DemoPage.propTypes = {
  defaultId: PropTypes.number,
};

DemoPage.defaultProps = {
  defaultId: 12, // Karl est l'utilisateur par défaut pour la démo
};

export default DemoPage;
