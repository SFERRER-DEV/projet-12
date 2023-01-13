import React, { useContext, useState } from 'react';
import { UserContext } from '../../../utils/context';
import styled from 'styled-components';
import Loader from '../../Loader';

/** @type {Object} Le conteneur du composant est une balise `<div>` */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * Un composant pour afficher les menus de démo du tableau de bord
 * @returns {React.ReactElement} Demo
 */
function DemoMenu(props) {
  const { menu } = props;
  /**
   * @typedef {Object} UserContext
   * @property {Object} data
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
  ] = useState(1); // 0s

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
          <h1>{menu}</h1>
          <h2>DemoMenu</h2>
          <p>
            Bonjour <span>{data.userInfos.firstName}</span>
          </p>
        </div>
      )}
    </Container>
  );
}

export default DemoMenu;
