import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useFetchUser } from '../../utils/services/api/hooks';
import { useTimer } from '../../utils/hooks';
import { LoaderHourGlass } from '../../utils/style/Atoms';

/** @type {Object} Le contenu principal de la page est dans une balise `<main>` */
const Container = styled.main`
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-row: auto / span 2;
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
 * Page tableau de bord: Accueil utilisateur
 * @param {Object} props
 * @param {string} props.pageName Le titre de la page
 * @param {string} props.menu Le nom du tableau de bord sélectionné dans le menu
 * @returns {JSX.Element} La page d'accueil du tableau de bord
 */
function Dashboard(props) {
  const { menu } = props;
  /**
   * @typedef {Object} params
   * @property {number} id L'identifiant d'un utilisateur obtenu depuis la route
   */
  /** @type {params} */
  const { id } = useParams();
  /**
   * @typedef {Object} useFetchUser
   * @property {Object} data
   * @property {boolean} isLoading Les données sont-elle entrain de se charger ?
   * @property {boolean} error Est-ce qu'une erreur est survenue lors du chargement ?
   * @property {string} errorMessage La raison de l'erreur
   */
  /** @type {useFetchUser} */
  const { data, isLoading, error, errorMessage } = useFetchUser(id);

  const { seconds } = useTimer(1);

  const congratulations =
    'Félicitation ! Vous avez explosé vos objectifs hier 👏';

  if (error) {
    <div style={{ fontSize: '2em', margin: '2em 0', padding: '1em' }}>
      Oups il y a eu un problème
    </div>;
  }

  return (
    <Container>
      <h1>{menu}</h1>
      <h2>Tableau de board</h2>
      {isLoading || seconds > 0 ? (
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
          <h2>
            Bonjour <span>{data.userInfos.firstName}</span>
          </h2>
          <p>{congratulations}</p>
        </div>
      )}
    </Container>
  );
}

export default Dashboard;
