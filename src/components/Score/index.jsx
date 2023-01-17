import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div``;

/**
 * Un composant pour afficher le % de l'objectif quotidien
 * @returns {React.ReactElement} Un composant Score
 */
function Score() {
  return (
    <Container className="dashboard__profile__score">
      <p>Score</p>
      <p>% de votre objectif</p>
    </Container>
  );
}

export default Score;
