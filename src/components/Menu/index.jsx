import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import MenuIcon from '../../components/MenuIcon';
import { iconesList } from './menu';

/** @type {Object} La navigation secondaire est un menu latéral contenant des icônes dans une balise `<nav>` */
const NavContainer = styled.nav`
  grid-column: 1;
  grid-row: 2;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.background};
  min-width: 3.5em;
`;

/**
 * @description Un composant pour afficher le menu de navigation latérale
 * @param {Object} props
 * @param {number} props.userId L'identifiant de l'utilisateur obtenu précédement depuis la route
 * @returns {React.ReactElement} Un composant Menu
 */
function Menu(props) {
  const { userId } = props;

  return (
    <NavContainer className="menu" aria-label="menu de navigation secondaire">
      {iconesList.map((/** @type {icones[]} */ { uri, iconSvg }, index) => (
        <MenuIcon
          key={`icon-${1000 + index}`}
          urlRoute={`/dashboard/home/${userId}/${uri}`}
          iconSvg={iconSvg}
        />
      ))}
    </NavContainer>
  );
}

Menu.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Menu;
