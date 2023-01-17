import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div``;

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
      <h1>Profil utilisateur</h1>
      <h2>
        Bonjour <span>{firstname}</span>
      </h2>
      <p>{congratulations}</p>
    </Container>
  );
}

export default Hello;
