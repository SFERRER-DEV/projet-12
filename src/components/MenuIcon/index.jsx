import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
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
  /** @type {string} Nom du type d'icône demandé */
  const { name } = props;
  /** @type {string} Texte aternatif de l'image */
  let altText = '';
  /** @type {string} Le fichier de l'icône au format svg */
  let iconSvg = '';
  /** @type {string} L'url vers laquelle l'icône pointe (Route)*/
  let urlRoute = '/';

  switch (name) {
    case 'recovery':
      iconSvg = recovery;
      urlRoute = '/Dashboard/Recovery';
      altText = `icon recovery activity`;
      break;
    case 'swimming':
      iconSvg = swimming;
      urlRoute = '/Dashboard/Swimming';
      altText = `icon swimming activity`;
      break;
    case 'cycling':
      iconSvg = cycling;
      urlRoute = '/Dashboard/Cycling';
      altText = `icon cycling activity`;
      break;
    case 'training':
      iconSvg = training;
      urlRoute = '/Dashboard/Training';
      altText = `icon training activity`;
      break;
    default:
      altText = 'icon';
      urlRoute = '/Dashboard';
  }

  return (
    <Link to={urlRoute}>
      <Container>
        <Icon src={iconSvg} alt={altText} />
      </Container>
    </Link>
  );
}

MenuICon.propTypes = {
  name: PropTypes.oneOf(['recovery', 'swimming', 'cycling', 'training'])
    .isRequired,
};

export default MenuICon;
