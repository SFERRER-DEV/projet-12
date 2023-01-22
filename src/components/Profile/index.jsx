import React, { useContext, useState } from 'react';
import { UserContext } from '../../utils/context/api-http';
import styled from 'styled-components';
import userFactory from '../../factories/userFactory';
import performanceFactory from '../../factories/performanceFactory';
import Loader from '../Loader';
import Error from '../Error';
import Hello from '../../components/Hello';
import Activity from '../../components/Activity';
import Sessions from '../../components/Sessions';
import Performance from '../../components/Performance';
import Score from '../../components/Score';
import KeyData from '../KeyData';
/** @typedef {import('../../utils/context/typedef').UserContext} Context Raccourci pour importer des types des propriétés JSON */

/** @type {Object} Cette balise `<div>` est la 2eme grille imbriquée,  son parent est la balise `<main>` qui  luis sert de balise anonyme pour être contnenue dans la 1ere grille qui est #root */
const Grid = styled.div``;

/** @type {Object} Cette balise `<div>` contient les données clés Calories, protéines, glucides, lipides dans la dernière colonne de la grille et s'étend sur 4 lignes */
const DataKeys = styled.div`
  border: 1px black green;
`;

/**
 * @description Un composant pour afficher le profil de l'utlisateur et les graphiques des activités sportives
 * @param {Object} props
 * @param {boolean} props.haveToMock Est-ce que les données sont cherchées dans le backend ou localement ?
 * @param {Function} props.setHaveToMock Fonction de mise à jour pour remonter l'état du mock
 * @returns {React.ReactElement} Profile
 */
function Profile(props) {
  /**  @typedef {number} seconds Nombre de seconde(s) à attendre */
  const [
    /** @type {seconds} */
    seconds,
    setSeconds,
  ] = useState(0); // 1s

  /** @type {Context} */
  const {
    id,
    codeStatus,
    setCodeStatus,
    data,
    dataActivity,
    dataSessions,
    dataPerformance,
    isLoading,
    setLoading,
    error,
    setError,
    errorMessage,
    setErrorMessage,
  } = useContext(UserContext);

  /** @type {Object} Un utilisateur à fabriquer */
  let user;
  // Fabriquer l'utilisateur typé quand le chargement est fini, sans erreur et à la fin du timer
  if (!isLoading && !error && seconds === 0) {
    // Protection
    if (Object.keys(data).length > 0) {
      /** @type {userFactory} Factory Method pour fabriquer l'utilisateur à partir de données JSON */
      const userModel = userFactory(data);
      // Fabriquer l'utilisateur
      user = userModel.getUser();

      /** @type {performanceFactory} Factory Method pour fabriquer les performances de l'utilisateur à partir de données JSON */
      const performanceModel = performanceFactory(dataPerformance);
      // Fabriquer les performances pour l'utilisateur
      user.performances = performanceModel.getPerformances();

      console.log(user);
      console.table(user);
    }
  }

  return isLoading || seconds > 0 ? (
    <Loader seconds={seconds} setSeconds={setSeconds} />
  ) : error ? (
    <Error
      codeStatus={codeStatus}
      isLoading={isLoading}
      error={error}
      errorMessage={errorMessage}
    />
  ) : (
    <Grid className="dashboard__profile">
      {/** Les données passées aux props de ces composants ci-dessous proviennent de la connection au contexte */}
      <Hello firstname={user?.firstName} />
      <Score todayScore={user?.todayScore} />
      <DataKeys className="dashboard__profile__datakeys">
        {user.keysData.map(({ key, designation, data, unit, color }, index) => (
          <KeyData
            key={`${key}-${1000 + index}`}
            id={key}
            designation={designation}
            data={data}
            unit={unit}
            color={color}
          />
        ))}
      </DataKeys>
      <Activity />
      <Sessions />
      <Performance performances={user.performances} />
    </Grid>
  );
}

export default Profile;
