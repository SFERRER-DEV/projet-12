import React from 'react';
import {
  RadarChart,
  Radar,
  PolarAngleAxis,
  PolarRadiusAxis,
  PolarGrid,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div``;

/**
 * Un composant pour afficher la durée moyenne des sessions
 * @returns {React.ReactElement} Un composant Sessions
 */
function Sessions({ sessions }) {
  console.log(sessions);

  return (
    <Container className="dashboard__profile__sessions">

    </Container>
  );
}

export default Sessions;
