import React from 'react';
import PropTypes from 'prop-types';
import logo from '../../assets/logo.svg';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { StyledLink1, StyledLink2 } from '../../utils/style/Atoms';

/** @type {Object} L'entête de page est une balise `<header>` */
const PageHeader = styled.header`
  grid-column: 1 / span 2;
  grid-row: 1;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
  background-color: ${colors.background};
  width: 100%;
    & a.pageheader__link {
      flex-grow: 1;
      display:flex;
      justify-content: flex-around;
      height: 100%;
    }
    & a.pageheader__link img {
       margin: 0 1em;
    }
    & a.pageheader__link h1 {
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
    min-width: fit-content;
    line-height: 2em;
  }
`;

/**
 * Un composant pour afficher l'entête de page avec la navigation principale
 * @param {Object} props
 * @param {number} props.userId L'identifiant de l' utilisateur obtenu précédement depuis la route
 * @returns {React.ReactElement} Un composant Header
 */
function Header(props) {
  const { userId } = props;

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
          to={`/dashboard/home/${userId}`}
        >
          Accueil
        </StyledLink1>
        <StyledLink1
          activeClassName="navlink"
          className="pageheader__nav__link"
          to={`/dashboard/profile/${userId}`}
        >
          Profil
        </StyledLink1>
        <StyledLink1
          activeClassName="navlink"
          className="pageheader__nav__link"
          to={`/dashboard/setting/${userId}`}
        >
          Réglage
        </StyledLink1>
        <StyledLink1
          activeClassName="navlink"
          className="pageheader__nav__link"
          to={`/dashboard/community/${userId}`}
        >
          Communauté
        </StyledLink1>
      </NavContainer>
    </PageHeader>
  );
}

Header.propTypes = {
  userId: PropTypes.number.isRequired,
};

export default Header;
