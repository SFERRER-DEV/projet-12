import { Link, NavLink } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
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

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

/** @type {Object} Un cercle en rotation est animé dans une balise `<div>` */
export const LoaderHourGlass = styled.div`
  border: 0.5em solid ${colors.tertiary};
  border-bottom-color: transparent;
  border-radius: 5em;
  animation: ${rotate} 1s infinite linear;
  height: 5em;
  width: 5em;
`;
