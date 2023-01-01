import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div``;

/**
 * Un composant pour afficher l'activité quotidienne
 * @returns {React.ReactElement} Un composant Activity
 */
function Activity() {
  return (
    <Container className="dashboard__profile__activity">
      <p>Activité quotidienne</p>
    </Container>
  );
}

export default Activity;
