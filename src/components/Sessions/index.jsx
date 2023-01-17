import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div``;

/**
 * Un composant pour afficher la durée moyenne des sessions
 * @returns {React.ReactElement} Un composant Sessions
 */
function Sessions() {
  return (
    <Container className="dashboard__profile__sessions">
      <p>Sessions</p>
      <p>Durée moyenne des sessions</p>
    </Container>
  );
}

export default Sessions;
