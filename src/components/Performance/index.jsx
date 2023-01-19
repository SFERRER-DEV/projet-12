import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div``;

/**
 * @description Un composant pour afficher  la performance de l'utilisateur:
 * intensité, vitesse, force, * endurance, énergie, cardio
 * Ce graphique est un RadarChart
 * @param {Object} props
 * @returns {React.ReactElement} Un composant Performance
 */
function Performance(props) {
  return <Container className="dashboard__profile__performance"></Container>;
}

export default Performance;
