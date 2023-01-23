import React from 'react';
import styled from 'styled-components';
import { PieChart, Pie, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div`
  .recharts-sector {
    stroke-linejoin: round;
    stroke-width: 0.5em;
  }
`;

/**
 * @description Un composant pour afficher le % de l'objectif quotidien de l'utilisateur
 * Ce graphique est une PieChart représentant
 * un arc de cercle avec un pourcentage
 * @param {Object} props
 * @param {number} props.todayScore Score du jour de l'utilisateur (objectif)
 * @returns {React.ReactElement} Un composant Score
 */
function Score({ todayScore }) {
  /**
   * @typedef {Object} pieData
   * @property {string} name propriété namekey du graphique
   * @property {number} value propriété datakey du graphique
   * @property {string} stroke couleur du trait dans le graphique
   */
  /** @type {pieData[]}} data Un tableau de données pour alimenter le graphique */
  const data = [
    { name: 'score', value: 1 - todayScore, stroke: colors.backsecondary },
    { name: 'score', value: todayScore, stroke: colors.tertiary },
  ];

  return (
    <Container className="dashboard__profile__score">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          {/** Heading graphique*/}
          <text
            dy="10%"
            dx="10%"
            textAnchor="start"
            fill={colors.primary}
            style={{ fontSize: '1.25em', fontWeight: '400', fillOpacity: 0.5 }}
          >
            Score
          </text>
          {/** Le score pourcentage au centre du graphique */}
          <text
            dy="50%"
            dx="50%"
            textAnchor="middle"
            fill={colors.primary}
            style={{ fontSize: '2em', fontWeight: '500', fillOpacity: 0.85 }}
          >
            {todayScore * 100}%
          </text>
          {/** `phrase `de votre objectif`  */}
          <text
            dy="60%"
            dx="50%"
            textAnchor="middle"
            fill={colors.primary}
            style={{ fontSize: '1em', fontWeight: '600', fillOpacity: 0.5 }}
          >
            de votre
          </text>
          <text
            dy="70%"
            dx="50%"
            textAnchor="middle"
            fill={colors.primary}
            style={{ fontSize: '1em', fontWeight: '600', fillOpacity: 0.5 }}
          >
            objectif
          </text>
          {/** `Graphique  */}
          <Pie
            data={data}
            nameKey="name"
            dataKey="value"
            cx="50%"
            cy="55%"
            innerRadius="64%"
            outerRadius="65%"
            fill={colors.tertiary}
            startAngle={180}
            endAngle={720}
          />
        </PieChart>
      </ResponsiveContainer>
    </Container>
  );
}

Score.propTypes = {
  todayScore: PropTypes.number.isRequired,
};

export default Score;
