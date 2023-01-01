import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Un conteneur pour afficher et centrer l'animation d'attente dans une balise `<div>` */
const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  margin: 2em 0;
  padding: 1em;
  & > span {
    color: ${colors.tertiary};
    font-weight: 500;
  }
  & button {
    font-size: 0.75em;
    background-color: ${colors.tertiary};
    color: ${colors.secondary};
    border: none;
    border-radius: 0.25em;
    height: 2em;
    padding-left: 0.75em;
    padding-right: 0.75em;
    margin: 1em;
    width: 100%;
    cursor: pointer;
  }
  & button:hover {
    color: ${colors.primary};
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
  const { codeStatus, error, errorMessage, setHaveToMock } = props;

  // Si le backend n'est pas disponible alors les données doivent être obtenues en local
  if (error && codeStatus === 'ERR_NETWORK') {
    console.log(`${Date.now()} - ${codeStatus}`);
  }

  return (
    <div>
      <ErrorWrapper>
        <h3>Oups il y a eu un problème</h3>
        <p>{errorMessage}</p>
        {error && codeStatus === 'ERR_NETWORK' ? (
          <button onClick={() => setHaveToMock(true)}>
            Cliquer pour utiliser un mock des données
          </button>
        ) : null}
      </ErrorWrapper>
    </div>
  );
}

export default Error;
