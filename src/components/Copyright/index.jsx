import React from 'react';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} La copyright latéral est une balise `<p>` */
const Copy = styled.p`
  grid-column-start: 1;
  grid-column-end: 1;
  grid-row-start: 3;
  grid-row-end: 3;
  display: flex;
  justify-content: center;
  align-items: center;
  text-orientation: sideways;
  writing-mode: vertical-rl;
  transform: rotate(-180deg);
  color: ${colors.secondary};
  background-color: ${colors.background};
  min-width: 3.5em;
  user-select: none;
  & > span {
    font-size: 1.25em;
  }
`;

/**
 * Un composant pour afficher le copyright latéral
 * @returns {React.ReactElement} Un composant Copyright
 */
function Copyright() {
  return (
    <Copy>
      <span>Copyright © SportSee {new Date().getFullYear()} </span>
    </Copy>
  );
}

export default Copyright;
