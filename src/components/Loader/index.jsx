import React, { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import colors from '../../utils/style/colors';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

/** @type {Object} Un conteneur pour afficher et centrer l'animation d'attente dans une balise `<div>` */
const LoaderWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  justify-content: center;
  align-content: center;
  height: 15em;
`;

/** @type {Object} Un cercle en rotation est animé dans une balise `<div>` */
const LoaderHourGlass = styled.div`
  border: 0.5em solid ${colors.tertiary};
  border-bottom-color: transparent;
  border-radius: 5em;
  animation: ${rotate} 1s infinite linear;
  height: 5em;
  width: 5em;
`;

/**
 * Un composant pour afficher un sablier d'attente de quelques secondes
 * @param {Object} props
 * @param {number} props.seconds Un nombre de secondes pour intialiser l'attente
 * @param {Function} props.setSeconds
 * @returns {React.ReactElement} Loader
 */
function Loader(props) {
  /**
   * @typedef {number} seconds Le nombre de seconde(s) à attendre
   */
  const {
    /** @type {seconds} */
    seconds,
    setSeconds,
  } = props;

  /**
   * Temporiser avant d'afficher les données de l'utilisateur
   */
  useEffect(() => {
    const interval = setInterval(() => {
      if (seconds > 0) setSeconds((seconds) => seconds - 1);
    }, 750);
    return () => clearInterval(interval);
  }, [seconds, setSeconds]);

  return (
    <LoaderWrapper>
      <LoaderHourGlass />
    </LoaderWrapper>
  );
}

export default Loader;
