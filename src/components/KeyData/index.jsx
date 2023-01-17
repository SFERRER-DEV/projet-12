import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le conteneur du composant est une balise `<div>`  */
const Container = styled.div``;

/**
 * Un composant pour afficher une donnée clef de l'utisateur
 * @returns {React.ReactElement} Un composant KeyData
 */
function KeyData(props) {
  const { data } = props;
  return (
    <Container className="">
      <p>KeyData</p>
      <p>{data}</p>
    </Container>
  );
}

export default KeyData;
