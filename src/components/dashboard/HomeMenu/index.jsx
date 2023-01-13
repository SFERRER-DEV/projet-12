import React, { useContext, useState } from 'react';
import { UserContext } from '../../../utils/context';
import styled from 'styled-components';
import userFactory from '../../../factories/userFactory';
import Loader from '../../Loader';
/** @typedef {import('../../../utils/context/typedef').UserJSON} UserJSON Raccourci pour importer des types des propriétés JSON */

/** @type {Object} Le conteneur du composant est une balise `<div>` */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * Un composant pour afficher l'accueil du tableau de board
 * @returns {React.ReactElement} Home
 */
function HomeMenu() {
  /**
   * @typedef {Object} UserContext
   * @property {UserJSON} data Les données utilisateur au format JSON
   * @property {boolean} isLoading Les données sont-elle entrain de se charger ?
   * @property {boolean} error Est-ce qu'une erreur est survenue lors du chargement ?
   * @property {string} errorMessage La raison de l'erreur
   */
  /** @type {UserContext} */
  const { data, isLoading, error, errorMessage } = useContext(UserContext);

  /**
   * @typedef {number} seconds Nombre de seconde(s) à attendre
   */
  const [
    /** @type {seconds} */
    seconds,
    setSeconds,
  ] = useState(1); // 1s

  /** @type {User} Un utilisateur à fabriquer */
  let user;

  // Fabriquer l'utilisateur typé quand le chargement est terminé sans erreur et à la fin du timer
  if (!isLoading && !error && seconds === 0) {
    // Protection
    if (Object.keys(data).length > 0) {
      /** @type {userFactory} Factory Method pour fabriquer l'utilisateur à partir de données JSON */
      const userModel = userFactory(data);
      // Fabriquer l'utilisateur
      user = userModel.getUser();
    }
  }

  const congratulations =
    'Félicitation ! Vous avez explosé vos objectifs hier 👏';

  return (
    <Container>
      {isLoading || seconds > 0 ? (
        <Loader seconds={seconds} setSeconds={setSeconds} />
      ) : error ? (
        <div style={{ fontSize: '2em', margin: '2em 0', padding: '1em' }}>
          <h3>Oups il y a eu un problème</h3>
          <p>{errorMessage}</p>
        </div>
      ) : (
        <div>
          <h1>Accueil</h1>
          <h2>HomeMenu</h2>
          <p>
            Bonjour <span>{user?.firstName}</span>
          </p>
          <p>{congratulations}</p>
        </div>
      )}
    </Container>
  );
}

export default HomeMenu;
