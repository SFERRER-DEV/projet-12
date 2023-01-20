import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import colors from './colors';

/** @type {Object} Lien de navigation `NavLink` pour l'entête de page */
export const StyledLink1 = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: fit-content;
    text-align: center;
    color: ${colors.secondary};
    text-decoration: none;
    cursor: pointer;
    &.${(props) => props.activeClassName} {
        // text-decoration: underline;
      }
  }
  `;

/** @type {Object} Lien de navigation `Link` */
export const StyledLink2 = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: fit-content;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
}
`;

/** @type {Object} Un conteneur pour afficher et bouton à cliquer `<div>` */
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5em;
  margin: 2em 0;
  padding: 1em;
  & > span {
    color: ${colors.tertiary};
    font-weight: 500;
  }
  & button {
    font-size: 0.75em;
    background-color: ${colors.tertiary};
    color: ${colors.secondary};
    border: none;
    border-radius: 0.25em;
    height: 2em;
    padding-left: 0.75em;
    padding-right: 0.75em;
    margin: 1em;
    width: 100%;
    cursor: pointer;
  }
  & button:hover {
    color: ${colors.primary};
  }
`;
