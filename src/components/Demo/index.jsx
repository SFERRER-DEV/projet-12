import React, { useContext, useState } from 'react';
import { UserContext } from '../../utils/context/api-http';
import { UserContextMock } from '../../utils/context/api-http-mock';
import styled from 'styled-components';
import userFactory from '../../factories/userFactory';
import Loader from '../Loader';
import Error from '../Error';
/** @typedef {import('../../utils/context/typedef').UserJSON} UserJSON Raccourci pour importer des types des propriétés JSON */
/** @typedef {import('../../utils/context/typedef').UserContext} UserContext Raccourci pour importer des types des propriétés JSON */
/** @typedef {import('../../utils/context/typedef').UserContextMock} UserContextMock Raccourci pour importer des types des propriétés JSON */

/** @type {Object} Le conteneur du composant est une balise `<section>` */
const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

/**
 * @description Un composant de démo affichnt d'autres menus de démonstration sur le  tableau de bord
 * @param {Object} props
 * @param {string} props.menu Un nom de menu sélectionné à afficher dans le du tableau de bord
 * @param {boolean} props.haveToMock Est-ce que les données sont cherchées dans le backend ou localement ?
 * @param {Function} props.setHaveToMock Fonction de mise à jour pour remonter l'état du mock
 * @returns {React.ReactElement} Demo
 */
function Demo(props) {
  const { menu } = props;

  return (
    <Container>
      <div>
        <h2>Menu démo</h2>
        <h3>{menu}</h3>
      </div>
    </Container>
  );
}

export default Demo;
