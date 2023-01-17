import React from 'react';
import PropTypes from 'prop-types';
import ClassSession from '../../models/Session';
import {
  AreaChart,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Rectangle,
  Area,
} from 'recharts';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div``;

/**
 * @description Un composant pour afficher la durée moyenne des sessions
 * @param {Object} props
 * @param {Session[]} props.sessions Un tableau hebdomadaire des durées des sessions
 * @returns {React.ReactElement} Un composant Sessions
 */
function Sessions({ sessions }) {
  /** @type {Objet[]} Modèle de données pour le graphique LineChart */
  const data = [];

  sessions.forEach((s) => {
    // Préparer un objet json correspondant au modèle de données du LineChart
    data.push(
      Object.assign({
        day: s.firstLetter(), // L'initiale du jour de la semaine
        sessionLength: s.sessionLength, // Une durée
      })
    );
  });

  // Info-bulle pour afficher la durée d'une session en minutes
  function CustomTooltip(props) {
    const { payload } = props;
    if (payload && payload.length) {
      return (
        <div style={{ background: 'white', padding: '0.5em' }}>
          <p>{payload[0].payload.sessionLength} min</p>
        </div>
      );
    }
  }

  // Rectangle de sélection foncé sous le curseur
  function CustomCursor(props) {
    if (props) {
      const { points, width, height } = props;
      const { x, y } = points[0];
      return (
        <Rectangle
          fill={colors.primary}
          fillOpacity={0.15}
          x={x}
          y={y}
          width={width}
          height={height}
        />
      );
    }
  }

  // Titre
  const CustomLegend = () => {
    return (
      <div
        style={{
          position: 'absolute',
          top: '0.5em',
          left: '5em',
          color: 'white',
          opacity: '0.5',
          fontSize: '1.15em',
          fontWeight: '500',
        }}
      >
        Durée moyenne des
        <br />
        sessions
      </div>
    );
  };

  return (
    <Container className="dashboard__profile__sessions">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            right: 5,
            left: -50, // Hack ?
          }}
        >
          {/** Ordonné non visible à gauche : La durée  des sessions */}
          <YAxis
            //datakey="sessionLength"
            type="number"
            axisLine={false}
            tickLine={false}
            tick={false}
            domain={[1, 'dataMax +20']}
            allowDataOverflow={true}
          />
          {/** Abscisse des jours de la semaine */}
          <XAxis
            type="category"
            dataKey="day"
            axisLine={false}
            tickLine={false}
            tickMargin={5}
            tick={{ fill: colors.secondary, opacity: '0.5' }}
          />
          {/** Titre */}
          <Legend
            verticalAlign="top"
            iconSize={0}
            content={<CustomLegend />}
            align="center"
          />
          {/** Un info-bulle affichant les minutes sous le curseur et le rectangle couvrant */}
          <Tooltip content={<CustomTooltip />} cursor={<CustomCursor />} />
          {/** Aire de la durée en clair */}
          <Area
            name="Durée moyenne des sessions"
            type="natural"
            dataKey="sessionLength"
            stroke={colors.secondary}
            fill={colors.secondary}
            fillOpacity={0.05}
            dot={false}
            strokeWidth={2}
          />
        </AreaChart>
      </ResponsiveContainer>
    </Container>
  );
}

Sessions.propTypes = {
  sessions: PropTypes.arrayOf(PropTypes.instanceOf(ClassSession)).isRequired,
};

export default Sessions;
