import React, { useContext } from 'react';
import { UserContext } from '../../../utils/context';
import { useTimer } from '../../../utils/hooks';
import { LoaderHourGlass } from '../../../utils/style/Atoms';
import styled from 'styled-components';

/** @type {Object} Le conteneur du composant est une balise `<div>` */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/** @type {Object} Un conteneur pour afficher et centrer l'animation d'attente dans une balise `<div>` */
const LoaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: center;
  align-content: center;
  height: 15em;
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

  return (
    <Container>
      {isLoading ? (
        <LoaderWrapper>
          <LoaderHourGlass />
        </LoaderWrapper>
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
