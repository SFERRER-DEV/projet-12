import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import { ButtonWrapper } from '../../utils/style/Atoms';

/**
 * Un composant pour afficher un message d'erreur et traiter le code Axios `Network Error `pour mocker les données
 * @param {Object} props Les States passés par le composant Profile
 * @param {string} props.codeStatus Code Axios d'après le code HTTP indiquant comment s'est passée la requête
 *  @param {boolean} props.isLoading Les données sont-elle entrain de se charger ?
 * @param {boolean} props.error Est-ce qu'une erreur est survenue lors du chargement ?
 * @param {string} props.errorMessage La raison de l'erreur
 * @returns {React.ReactElement} Error
 */
function Error(props) {
  const haveToMock = parseInt(window.localStorage.getItem('haveToMock')) || 0;

  /**  @typedef {boolean} reload Un State à basculer pour re render le composant */
  const [reload, setReload] = useState(false);

  useEffect(() => {
    console.log(`Reload ${reload}`);
  }, [reload]);

  const { codeStatus, isLoading, error, errorMessage } = props;

  if (error && codeStatus === 'ERR_NETWORK') {
    console.log(`${Date.now()} - ${codeStatus}`);
  }

  return (
    <div>
      <ButtonWrapper>
        <h3>Oups il y a eu un problème</h3>
        <p>{errorMessage}</p>
        {!isLoading &&
        error &&
        codeStatus === 'ERR_NETWORK' &&
        haveToMock === 0 &&
        reload === false ? (
          // Le backend n'est pas disponible
          <button
            onClick={() => {
              // Mémoriser localement qu'il faut mocker les données
              window.localStorage.setItem('haveToMock', 1);
              setReload(true);
            }}
          >
            Cliquer pour utiliser un mock des données
          </button>
        ) : reload === true ? (
          <Redirect push to={`/dashboard/home/`} />
        ) : null}
      </ButtonWrapper>
    </div>
  );
}

export default Error;
