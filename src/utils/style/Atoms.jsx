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
