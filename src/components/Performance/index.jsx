import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div``;

/**
 * Un composant pour afficher l'activité quotidienne
 * @returns {React.ReactElement} Un composant Activity
 */
function Performance() {
  return (
    <Container className="dashboard__profile__performance">
      <p>Performance</p>
      <p>Intensité, Vitesse, Force, Endurance, Energie, Cardio</p>
    </Container>
  );
}

export default Performance;
