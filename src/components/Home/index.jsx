import React, { useContext, useState } from 'react';
import { UserContext } from '../../utils/context/api-http';
import { UserContextMock } from '../../utils/context/api-http-mock';
import styled from 'styled-components';
import userFactory from '../../factories/userFactory';
import Loader from '../Loader';
import Error from '../Error';
/** @typedef {import('../../utils/context/typedef').UserJSON} UserJSON Raccourci pour importer des types des propriétés JSON */
/** @typedef {import('../../utils/context/typedef').UserContext} UserContext Raccourci pour importer des types des propriétés JSON */
/** @typedef {import('../../utils/context/typedef').UserContextMock} UserContextMock Raccourci pour importer des types des propriétés JSON */

/** @type {Object} Le conteneur du composant est une balise `<section>` avec un grille flexible */
const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * @description Un composant pour afficher l'accueil du tableau de board
 * et les graphiques sur l'activité sportive de l'utilisateur
 * @param {Object} props
 * @param {boolean} props.haveToMock Est-ce que les données sont cherchées dans le backend ou localement ?
 * @param {Function} props.setHaveToMock Fonction de mise à jour pour remonter l'état du mock
 * @returns {React.ReactElement} Home
 */
function Home(props) {
  const { haveToMock, setHaveToMock } = props;

  /** @type {UserContext | UserContextMock } */
  const { codeStatus, data, isLoading, error, errorMessage } = useContext(
    // Utiliser le bon contexte de données soit elles sont mockées en local, soit elles sont cherchées sur le backend
    haveToMock ? UserContextMock : UserContext
  );

  /**
   * @typedef {number} seconds Nombre de seconde(s) à attendre
   */
  const [
    /** @type {seconds} */
    seconds,
    setSeconds,
  ] = useState(1); // 1s

  /** @type {Object} Un utilisateur à fabriquer */
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
    <Container className="dashboard__home">
      {isLoading || seconds > 0 ? (
        <Loader seconds={seconds} setSeconds={setSeconds} />
      ) : error ? (
        <Error
          codeStatus={codeStatus}
          error={error}
          errorMessage={errorMessage}
          haveToMock={haveToMock}
          setHaveToMock={setHaveToMock}
        />
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

export default Home;
