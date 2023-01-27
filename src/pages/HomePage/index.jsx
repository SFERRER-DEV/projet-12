import React, { useEffect, useState } from 'react';
import {
  BrowserRouter as Route,
  Switch,
  useRouteMatch,
  useParams,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import { UserProvider } from '../../utils/context/api-http';
import { ButtonWrapper } from '../../utils/style/Atoms';
import Header from '../../components/Header';
import Menu from '../../components/Menu';
import Demo from '../../components/Demo';

/**
 * @description Page accueil du tableau de bord
 * @returns {JSX.Element} La page d'accueil du tableau de bord
 */
function HompePage({ defaultId }) {
  let { path } = useRouteMatch();

  const haveToMock = parseInt(window.localStorage.getItem('haveToMock')) || 0;
  const [reload, setReload] = useState(false);

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
        <main className="homepage">
          <Switch>
            <Route exact path={`${path}/`}>
              <h1>Accueil</h1>
              {/** Le bouton pour supprimer le mock des données */}
              <ButtonWrapper>
                {haveToMock === 1 ? (
                  <button
                    onClick={() => {
                      // Permet de tenter d'utiliser le backend à nouveau
                      window.localStorage.removeItem('haveToMock');
                      setReload(true);
                    }}
                  >
                    Cliquer pour enlever le mock
                  </button>
                ) : (
                  <p>Les données ne sont pas mockées</p>
                )}
              </ButtonWrapper>
            </Route>
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
              <Demo /** menu="Entrainement" */ />
            </Route>
          </Switch>
        </main>
      </UserProvider>
    </React.Fragment>
  );
}

HompePage.propTypes = {
  defaultId: PropTypes.number,
};

HompePage.defaultProps = {
  defaultId: 12, // Karl est l'utilisateur par défaut pour la démo
};

export default HompePage;
