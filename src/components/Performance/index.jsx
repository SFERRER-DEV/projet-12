import React from 'react';
import PropTypes from 'prop-types';
import ClassPerformance from '../../models/Performance';
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
 * @description Un composant pour afficher  la performance de l'utilisateur:
 * intensité, vitesse, force, * endurance, énergie, cardio
 * Ce graphique est un RadarChart
 * @param {Object} props
 * @param {Performance[]} props.performances Un tableau des niveaux de performances
 * @returns {React.ReactElement} Un composant Performance
 */
function Performance({ performances }) {
  /** @type {Objet[]} Modèle de données pour le graphique RadarChart */
  const data = [];
  performances.forEach((p) => {
    // Préparer un objet json correspondant au modèle de données du RadarChart
    data.push(
      Object.assign({
        kind: p.kind,
        name: p.name,
        level: p.level,
      })
    );
  });

  return (
    <Container className="dashboard__profile__performance">
      <ResponsiveContainer height="100%" width="100%">
        <RadarChart
          data={data.reverse()}
          margin={{ top: 30, bottom: 30, left: 30, right: 30 }}
        >
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="name" tick={{ fill: colors.secondary }} />
          <PolarRadiusAxis tick={false} axisLine={false} />
          <Radar
            dataKey="level"
            stroke="none"
            fill={colors.tertiary}
            fillOpacity={0.6}
          />
        </RadarChart>
      </ResponsiveContainer>
    </Container>
  );
}

Performance.propTypes = {
  performances: PropTypes.arrayOf(PropTypes.instanceOf(ClassPerformance))
    .isRequired,
};

export default Performance;
