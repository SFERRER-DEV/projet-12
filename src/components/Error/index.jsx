import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Un conteneur pour afficher et centrer l'animation d'attente dans une balise `<div>` */
const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  margin: 2em 0;
  padding: 1em;
  & p {
    & > span {
      color: ${colors.tertiary};
      font-weight: 500;
    }
  }
`;

/**
 * Un composant pour afficher un message d'erreur et traiter le code Axios `Network Error `pour mocker les données
 * @param {Object} props
 * @param {string} props.codeStatus Code Axios d'après le code HTTP indiquant comment s'est passée la requête
 * @param {boolean} props.error Est-ce qu'une erreur est survenue lors du chargement ?
 * @param {string} props.errorMessage La raison de l'erreur
 * @param {boolean} props.haveToMock Est-ce que les données sont cherchées dans le backend ou localement ?
 * @param {Function} props.setHaveToMock Fonction de mise à jour pour remonter l'état du mock
 *
 * @returns {React.ReactElement} Error
 */
function Error(props) {
  const { codeStatus, error, errorMessage, haveToMock, setHaveToMock } = props;

  /**
   * @typedef {number} seconds Nombre de seconde(s) à attendre
   */
  const [
    /** @type {seconds} */
    seconds,
    setSeconds,
  ] = useState(3); // 3s

  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) setSeconds((seconds) => seconds - 1);
    }, 750);
    return () => clearInterval(interval);
  }, [seconds, setSeconds]);

  // Si le backend n'est pas disponible alors les données doivent être obtenues en local
  if (error && codeStatus === 'ERR_NETWORK' && seconds === 0) {
    // Marquer les données comme devant être mockées, c'est à dire obtenues localement dans le fichier public/data/data.json
    setHaveToMock(true);
  }

  return (
    <div>
      {!haveToMock ? (
        <ErrorWrapper>
          <h3>Oups il y a eu un problème</h3>
          <p>{errorMessage}</p>
          <p>
            Les données vont être mockées dans <span>{seconds}</span> secondes
          </p>
        </ErrorWrapper>
      ) : null}
    </div>
  );
}

export default Error;
