import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
        : 'none' /** retourner une icône (faDrumstickBite) */
  };
`;

/** @type {Object} Le conteneur de la designation est une balise `<div>` */
const Designation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 1em;
  & > p {
    font-weight: 700;
    font-size: 1.25em;
  }
  & > h3 {
    color: ${colors.primary}
    font-size: 1em;
    filter: opacity(0.5);
  }
`;

/**
 * Un composant pour afficher une donnée clef de l'utisateur
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
  designation: PropTypes.string.isRequired,
  data: PropTypes.number.isRequired,
};

export default KeyData;
