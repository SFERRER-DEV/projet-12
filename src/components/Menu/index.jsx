import styled from 'styled-components';
import colors from '../../utils/style/colors';
import MenuIcon from '../../components/MenuIcon';

/** @type {Object} La navigation secondaire est un menu latéral contenant des icônes dans une balise `<nav>` */
const NavContainer = styled.nav`
  grid-column-start: 1;
  grid-column-end: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.background};
  border: 3px red solid;
  min-width: 3.5em;
`;

/**
 * Un composant pour afficher le menu de navigation latérale
 * @returns {React.ReactElement} Un composant Menu
 */
function Menu() {
  return (
    <NavContainer className="menu" aria-label="menu de navigation secondaire">
      <MenuIcon key={1001} name={'recovery'} />
      <MenuIcon key={1002} name={'swimming'} />
      <MenuIcon key={1003} name={'cycling'} />
      <MenuIcon key={1004} name={'training'} />;
    </NavContainer>
  );
}

export default Menu;
