import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  & p {
    width: 100%;
  }
  & p:first-child {
    font-size: 2.25em;
    font-weight: 500;
    & span {
      color: ${colors.tertiary};
    }
    margin-left 0.5em;
  }
  & p:last-child {
    font-size: 1.25em;
    margin-left 0.975em;
  }
`;

/**
 * Un composant pour afficher le prénom de l'utilisateur et Bonjour !
 * @returns {React.ReactElement} Un composant Hello
 */
function Hello(props) {
  const { firstname } = props;

  const congratulations =
    'Félicitation ! Vous avez explosé vos objectifs hier 👏';

  return (
    <Container className="dashboard__profile__hello">
      <p>
        Bonjour <span>{firstname}</span>
      </p>
      <p>{congratulations}</p>
    </Container>
  );
}

Hello.propTypes = {
  firstname: PropTypes.string.isRequired,
};

export default Hello;
