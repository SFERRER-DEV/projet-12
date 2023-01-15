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

/** @type {Object} Le conteneur du composant est une balise `<div>` */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * @description Un composant de démo affichnt d'autres menus de démonstration sur le  tableau de bord
 * @param {Object} props
 * @param {string} props.menu Un nom de menu sélectionné à afficher dans le du tableau de bord
 * @param {boolean} props.haveToMock Est-ce que les données sont cherchées dans le backend ou localement ?
 * @param {Function} props.setHaveToMock Fonction de mise à jour pour remonter l'état du mock
 * @returns {React.ReactElement} Demo
 */
function DemoMenu(props) {
  const { menu, haveToMock, setHaveToMock } = props;

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
  ] = useState(1); // 0s

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
  return (
    <Container>
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
          <h1>{menu}</h1>
          <h2>DemoMenu</h2>
          <p>
            Bonjour <span>{user?.firstName}</span>
          </p>
        </div>
      )}
    </Container>
  );
}

export default DemoMenu;
