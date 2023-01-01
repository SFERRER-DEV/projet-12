import { useParams, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import colors from '../../utils/style/colors';
import { StyledLink1, StyledLink2 } from '../../utils/style/Atoms';

/** @type {Object} L'entête de page est une balise `<header>` */
const PageHeader = styled.header`
  grid-column-start: 1;
  grid-column-end: 2;
  grid-column: auto / span 2;
  display: flex;
  flex-direction: row;
  flex-wrap: no-wrap;
  align-items: center;
  background-color: ${colors.background};
    & a.pageheader__link {
      flex-basis: 10%;
      flex-grow: 1;
      display:flex;
      justify-content: flex-around;
      height: 100%;
    }
    & img {
      margin: 1em;
    }
    & h1 {
      font-size: 1.5em;
      font-weight: 400;
      color: ${colors.tertiary};
      line-height: 2em;
    }
  }
`;

/** @type {Object} La navigation principale est une balise `<nav>` */
const NavContainer = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  flex-basis: 90%;
  flex-grow: 1;
  align-items: center;
  height: 100%;
  color: ${colors.secondary};
  font-size: 1.5em;
  font-weight: 400;
  & a.pageheader__nav__link {
    flex-basis: 8em;
    min-width: fit-content;
    line-height: 2em;
  }
`;

/**
 * Un composant pour afficher l'entête de page avec la navigation principale
 * @returns {React.ReactElement} Un composant Header
 */
function Header(props) {
  /** @type {string} uri identifiant de la route d'accès actuelle */
  const uri = useLocation().pathname;

  /** @type {number} L'identifiant utlisateur a été mémorisé localement #1 */
  const userId = parseInt(window.localStorage.getItem('userId'));
  /** @typedef {number} id identifiant utilisateur obtenu depuis le paramètre id de la route #2 */
  const { id } = useParams();
  /** @type {number} uriUserId identifiant extrait depuis la chaine de caractères de la route actuelle # 3*/
  const uriUserId = parseInt(uri.split(/[//]+/).pop());
  /** @typedef {number} defaultUserId identifiant de l'utilisateur défini par défaut #4*/
  const { defaultUserId } = props;

  /** @type {number} choosenId identifiant utilisateur prévalant */
  let choosenId =
    id === undefined
      ? userId === undefined
        ? uriUserId === undefined || isNaN(uriUserId)
          ? defaultUserId // Obtenu par défaut avec la PropTypes (= Karl)
          : uriUserId // Obtenu dans la chaine de la route
        : userId // Obtenu depuis le localStorage
      : id; // Obtenu depuis le routing

  return (
    <PageHeader className="pageheader">
      <StyledLink2 className="pageheader__link" to="/">
        <img src={logo} alt="SportSee logo" />
        <h1>SportSee</h1>
      </StyledLink2>
      <NavContainer aria-label="navigation principale">
        <StyledLink1
          activeClassName="navlink"
          className="pageheader__nav__link"
          to={`/dashboard/home/${choosenId}`}
        >
          Accueil
        </StyledLink1>
        <StyledLink1
          activeClassName="navlink"
          className="pageheader__nav__link"
          to={`/dashboard/profile/${choosenId}`}
        >
          Profil
        </StyledLink1>
        <StyledLink1
          activeClassName="navlink"
          className="pageheader__nav__link"
          to={`/dashboard/setting/${choosenId}`}
        >
          Réglage
        </StyledLink1>
        <StyledLink1
          activeClassName="navlink"
          className="pageheader__nav__link"
          to={`/dashboard/community/${choosenId}`}
        >
          Communauté
        </StyledLink1>
      </NavContainer>
    </PageHeader>
  );
}

Header.propTypes = {
  defaultUserId: PropTypes.number,
};

Header.defaultProps = {
  defaultUserId: 12, // Karl est l'utilisateur affiché par défaut
};

export default Header;
