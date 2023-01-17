import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

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
 * @param {string} props.menu Un nom de menu sélectionné à afficher dans tableau de bord
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

Demo.propTypes = {
  menu: PropTypes.string.isRequired,
};

Demo.defaultProps = {
  menu: 'An other menu...',
};

export default Demo;
