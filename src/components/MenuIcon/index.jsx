import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import training from '../../assets/training.svg';
import cycling from '../../assets/cycling.svg';
import swimming from '../../assets/swimming.svg';
import recovery from '../../assets/recovery.svg';

/** @type {Object} Le container de l'icone d'une entrée du menu latéral est une balise `<div>` avec un fond blanc */
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5%;
  height: 3.125em;
  width: 3.125em;
  background-color: ${colors.secondary};
`;

/** @type {Object} Une icone d'une entrée du menu latéral est un graphique svg présentée dans une balise `<img>` animée */
const Icon = styled.img`
  height: 2em;
  width: 2em;
  transform: scale(1);
  transition-duration: 0.5s;
  &:hover {
    transform: scale(1.25);
    transition-duration: 0.5s;
  }
`;

/**
 * Un composant pour afficher une entrée du menu de navigation latérale avec une icône dans un lien
 * @returns {React.ReactElement} Un composant MenuIcon
 */
function MenuICon(props) {
  const { name } = props;
  let altText = '';
  let iconSvg = '';

  switch (name) {
    case 'cycling':
      altText = `icon cycling activity`;
      iconSvg = cycling;
      break;
    case 'recovery':
      altText = `icon recovery activity`;
      iconSvg = recovery;
      break;
    case 'swimming':
      altText = `icon swimming activity`;
      iconSvg = swimming;
      break;
    case 'training':
      altText = `icon training activity`;
      iconSvg = training;
      break;
    default:
      altText = 'icon';
  }

  return (
    <Link to="/">
      <Container>
        <Icon src={iconSvg} alt={altText} />
      </Container>
    </Link>
  );
}

export default MenuICon;
