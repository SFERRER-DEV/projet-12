import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import PropTypes from 'prop-types';
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
 * @description Un composant pour afficher le menu de navigation latérale
 * @param {Object} props Un seule propriété est destructurée: defaultUserId
 * @param {number} props.defaultUserId L'identifiant donné par defaultProps (=12)
 * @returns {React.ReactElement} Un composant Menu
 */
function Menu(props) {
  const { defaultUserId } = props;
  /** @type {string} uri identifiant de la route d'accès actuelle */
  const uri = useLocation().pathname;
  /** @type {number} uriUserId identifiant extrait depuis la chaine de caractères de la route actuelle */
  const uriUserId = parseInt(uri.split(/[//]+/).pop());
  /** @typedef {number} id identifiant utilisateur obtenu depuis le paramètre id de la route */
  const { id } = useParams();
  /** @type {number} choosenId identifiant utilisateur prévalant */
  let choosenId =
    id === undefined // Obtenu depuis le routing
      ? uriUserId === undefined || isNaN(uriUserId) // Obtenu dans la chaine de la route
        ? defaultUserId // Obtenu par défaut avec la PropTypes
        : uriUserId
      : id;

  return (
    <NavContainer className="menu" aria-label="menu de navigation secondaire">
      <MenuIcon key={1001} name={'recovery'} userId={choosenId} />
      <MenuIcon key={1002} name={'swimming'} userId={choosenId} />
      <MenuIcon key={1003} name={'cycling'} userId={choosenId} />
      <MenuIcon key={1004} name={'training'} userId={choosenId} />;
    </NavContainer>
  );
}

Menu.propTypes = {
  defaultUserId: PropTypes.number,
};

Menu.defaultProps = {
  defaultUserId: 12, // Karl est l'utilisateur affiché par défaut
};

export default Menu;
