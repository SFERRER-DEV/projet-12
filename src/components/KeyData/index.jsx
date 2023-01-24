import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { findIcon } from './icones';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-start;
  background: ${colors.backsecondary};
  padding: 1.5em 1em;
`;

/** @type {Object} Le conteneur du composant est une balise `<div>` */
const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3.5em;
  width: 3.5em;
  border-radius: 0.25em;
  background-color: ${({ color }) => color /** la couleur dépend de l'icône */};
  filter: brightness(150%);
`;

/** @type {Object} L'icone spécifique de la donnée clef est dans une balise `<i>` */
const Icon = styled.i`
  font-size: 1.85em;
  color: ${({ color }) => color /** la couleur dépend de l'icône */};
  filter: saturate(25);
  transform: ${
    ({ flip }) =>
      flip === true
        ? 'rotate(180deg)'
        : 'none' /** retourner l'icône faDrumstickBite (free) ~ faDrumstick (pro) */
  };
`;

/** @type {Object} Le conteneur de la designation est une balise `<div>` */
const Designation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
  & > h3 {
    color: ${colors.primary}
    font-size: 1em;
    filter: opacity(0.5);
  }
  & > p {
    font-weight: 700;
    font-size: 1.25em;
  }
`;

/**
 * Un composant pour afficher une donnée clef de l'utisateur
 * @param {Object} props
 * @param {string} props.id Le nom identifiant la donnée clé (est un nom de propriété json)
 * @param {string} props.designation Traduction en français
 * @param {number} props.data Valeur de la donnée clef
 * @param {string} props.unit Unité kCal, g ...
 * @returns {React.ReactElement} Un composant KeyData
 */
function KeyData(props) {
  const { id, designation, data, unit } = props;

  /** @type {Object} L'icône FontAwesome à utiliser pour cette donnée clef */
  const faIcon = findIcon(id);

  return (
    <Container className="">
      <IconWrapper color={faIcon.color}>
        <Icon
          color={faIcon.color}
          flip={faIcon.key === 'proteinCount' ? true : false}
        >
          <FontAwesomeIcon icon={faIcon.icon} />
        </Icon>
      </IconWrapper>
      <Designation>
        <p>
          {data}
          {unit}
        </p>
        <h3>{designation}</h3>
      </Designation>
    </Container>
  );
}

KeyData.propTypes = {
  id: PropTypes.oneOf([
    'calorieCount',
    'proteinCount',
    'carbohydrateCount',
    'lipidCount',
  ]).isRequired,
  data: PropTypes.number.isRequired,
  designation: PropTypes.string.isRequired,
  unit: PropTypes.string,
};

export default KeyData;
