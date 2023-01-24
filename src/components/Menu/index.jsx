import { useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import MenuIcon from '../../components/MenuIcon';
import { iconesList } from './menu';

/** @type {Object} La navigation secondaire est un menu latéral contenant des icônes dans une balise `<nav>` */
const NavContainer = styled.nav`
  grid-column-start: 1;
  grid-column-end: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.background};
  min-width: 3.5em;
`;

/**
 * @description Un composant pour afficher le menu de navigation latérale
 * @param {Object} props Un seule propriété est destructurée: defaultUserId
 * @param {number} props.defaultUserId L'identifiant donné par defaultProps (=12)
 * @returns {React.ReactElement} Un composant Menu
 */
function Menu(props) {
  /** @typedef {number} defaultUserId identifiant de l'utilisateur défini par défaut (0)*/
  const { defaultUserId } = props;

  /** @type {number} L'identifiant utlisateur a été mémorisé localement (1) */
  const userId = parseInt(window.localStorage.getItem('userId'));
  /** @typedef {number} id identifiant utilisateur obtenu depuis le paramètre id de la route (2) */
  const { id } = useParams();

  /** @type {string} uri identifiant de la route d'accès actuelle */
  const uri = useLocation().pathname;
  /** @type {number} uriUserId identifiant extrait depuis la chaine de caractères de la route actuelle (3) */
  const uriUserId = parseInt(uri.split(/[//]+/).pop());

  /** @type {number} choosenId identifiant utilisateur prévalant */
  let choosenId =
    id === undefined
      ? userId === undefined || isNaN(uriUserId)
        ? uriUserId === undefined || isNaN(uriUserId)
          ? defaultUserId // Obtenu par défaut avec la PropTypes (= Karl)
          : uriUserId // Obtenu dans la chaine de la route
        : userId // Obtenu depuis le localStorage
      : id; // Obtenu depuis le routing

  return (
    <NavContainer className="menu" aria-label="menu de navigation secondaire">
      {iconesList.map((/** @type {IconesList} */ { uri, iconSvg }, index) => (
        <MenuIcon
          key={`icon-${1000 + index}`}
          urlRoute={`/dashboard/home/${choosenId}/${uri}`}
          iconSvg={iconSvg}
        />
      ))}
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
