import React, { useContext, useState } from 'react';
import { UserContext } from '../../utils/context/api-http';
import { UserContextMock } from '../../utils/context/api-http-mock';
import styled from 'styled-components';
import userFactory from '../../factories/userFactory';
import Loader from '../Loader';
import Error from '../Error';
import Hello from '../../components/Hello';
import Activity from '../../components/Activity';
import Sessions from '../../components/Sessions';
import Performance from '../../components/Performance';
import Score from '../../components/Score';
import KeyData from '../KeyData';

/** @typedef {import('../../utils/context/typedef').UserJSON} UserJSON Raccourci pour importer des types des propriétés JSON */
/** @typedef {import('../../utils/context/typedef').UserContext} UserContext Raccourci pour importer des types des propriétés JSON */
/** @typedef {import('../../utils/context/typedef').UserContextMock} UserContextMock Raccourci pour importer des types des propriétés JSON */

/** @type {Object} Cette balise `<div>` est la 2eme grille imbriquée,  son parent est la balise `<main>` qui  luis sert de balise anonyme pour être contnenue dans la 1ere grille qui est #root */
const Grid = styled.div`
  border: 3px black dotted;
`;

/** @type {Object} Cette balise `<div>` contient les données clés Calories, protéines, glucides, lipides dans la dernière colonne de la grille et s'étend sur 4 lignes */
const DataKeys = styled.div`
  border: 1px black green;
`;

/**
 * @description Un composant pour afficher le profile de l'utlisateur avec
 * et les graphiques des activités sportives
 * @param {Object} props
 * @param {boolean} props.haveToMock Est-ce que les données sont cherchées dans le backend ou localement ?
 * @param {Function} props.setHaveToMock Fonction de mise à jour pour remonter l'état du mock
 * @returns {React.ReactElement} Profile
 */
function Profile(props) {
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
  ] = useState(0); // 1s

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

  return isLoading || seconds > 0 ? (
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
    <Grid className="dashboard__profile">
      <Hello firstname={user?.firstName} />
      <Activity />
      <Sessions />
      <Performance />
      <Score />
      <DataKeys className="dashboard__profile__datakeys">
        <KeyData key="calorie" data="calorie" />
        <KeyData key="protein" data="protein" />
        <KeyData key="carbohydrate" data="carbohydrate" />
        <KeyData key="lipid" data="lipid" />
      </DataKeys>
    </Grid>
  );
}

export default Profile;
