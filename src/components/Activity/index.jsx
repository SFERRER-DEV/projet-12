import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Legend,
  Label,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div``;

/**
 * Un composant pour afficher les jours d'activité
 * @param {Object} props
 * @param {Activity[]} props.sessions Un tableau des jours d'activités
 * @returns {React.ReactElement} Un composant Activity
 */
function Activity({ sessions }) {
  /** @type {Objet[]} Modèle de données pour le graphique BarChart*/
  const data = [];

  // Préparer le tableau d'objets json correspondant au modèle de données attendu par le BarChart
  sessions
    .sort(function (a, b) {
      // Tri ascendant des dates d'activités
      return new Date(a.day) - new Date(b.day);
    })
    .forEach((a) => {
      data.push(
        Object.assign({
          day: a.day, // Le jour yyyy-mm-dd de l'activité
          numday: data.length + 1, //  Numéroter les activités triées par date (la N°1 est la ancienne, la dernière la plus récente)
          kilogram: a.kilogram, // Poids
          calories: a.calories, // Calories
        })
      );
    });

  // Mise en forme des légendes des barres poids et calories
  const renderColorfulLegendText = (value /** ,entry */) => {
    // const { color } = entry;
    return (
      <span
        style={{
          color: colors.primary,
          fontWeight: 500,
          marginRight: '2em',
        }}
      >
        {value}
      </span>
    );
  };

  //  Info-bulle personnalisé
  function CustomTooltip({ active, payload /** ,label */ }) {
    if (active && payload && payload.length) {
      return (
        <div
          style={{
            background: colors.tertiary,
            padding: '5px 5px',
            color: colors.secondary,
          }}
        >
          <p>{payload[0].payload.kilogram} Kg</p>
          <p>{payload[1].payload.calories} kCal</p>
        </div>
      );
    }
  }

  return (
    <Container className="dashboard__profile__activity">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          barGap={10}
          barSize={7}
          margin={{
            left: -50, // Hack ?
          }}
        >
          {/** Abscisse du haut non visible : Utilisé pour le titre qui est dans un label */}
          <XAxis
            xAxisId={0}
            orientation="top"
            tick={false}
            tickLine={false}
            axisLine={false}
          >
            <Label
              position="insideLeft"
              dy={-20}
              style={{
                fill: 'black',
                fontSize: '1.25em',
                fontWeight: 500,
              }}
            >
              Activité quotidienne
            </Label>
          </XAxis>
          <CartesianGrid strokeDasharray="2 2" vertical={false} />
          {/** Abscisse du bas : Les numéros des jours de 1 à 7 */}
          <XAxis
            xAxisId={1}
            type="category"
            dataKey="numday"
            tickLine={false}
          />
          {/** L'info-bulle sur les barres */}
          <Tooltip content={<CustomTooltip />} />
          {/** Ordonné à droite et visible : Le poids dans la barre noire  */}
          <YAxis
            yAxisId="kilogram"
            type="number"
            domain={['dataMin - 3', 'dataMax + 3']}
            tickLine={false}
            axisLine={false}
            orientation="right"
          />
          <Bar
            name="Poids (kg)"
            yAxisId="kilogram"
            dataKey="kilogram"
            radius={[20, 20, 0, 0]}
            fill={colors.primary}
          />
          {/** Ordonné à gauche non visible : Les calories dans la barre rouge */}
          <YAxis
            yAxisId="calories"
            type="number"
            domain={['dataMin - 50', 'dataMax + 50']}
            axisLine={false}
            tickLine={false}
            tick={false}
            //hide="true"
          />
          <Bar
            name="Calories brulées (kCal)"
            yAxisId="calories"
            dataKey="calories"
            radius={[20, 20, 0, 0]}
            fill={colors.tertiary}
          />
          {/** Légendes : Poids (kg) et Calories brulées  */}
          <Legend
            verticalAlign="top"
            align="right"
            iconType="circle"
            iconSize={10}
            fill={colors.secondary}
            formatter={renderColorfulLegendText}
          />
        </BarChart>
      </ResponsiveContainer>
    </Container>
  );
}

export default Activity;
