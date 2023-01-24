import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

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
  height: 1.5em;
  width: 1.5em;
  transition-duration: 0.45s;
  &:hover {
    transform: scale(1.25);
    transition-duration: 0.25s;
  }
`;

/** @type {Object} Un icône non trouvée pour une entrée du menu latéral */
const IconError = styled.i`
  font-size: 1.75em;
  color: ${colors.tertiary};
  transition-duration: 0.45s;
  &:hover {
    transform: scale(1.25);
    transition-duration: 0.25s;
  }
`;

/**
 * @description Un composant pour afficher une entrée du menu de navigation latérale avec une icône dans un lien
 * @param {Object} props
 * @param {string} props.urlRoute  L'url vers laquelle l'icône pointe (Route)
 * @param {string} props.iconSvg L'url vers le fichier de l'icône au format svg dans /static/media/
 * @returns {React.ReactElement} Un composant MenuIcon
 */
function MenuICon(props) {
  const { urlRoute, iconSvg } = props;

  return (
    <Link to={urlRoute}>
      <Container>
        {iconSvg !== '' && iconSvg !== null ? (
          <Icon src={iconSvg} />
        ) : (
          <IconError>
            <FontAwesomeIcon icon={faXmark} />
          </IconError>
        )}
      </Container>
    </Link>
  );
}

MenuICon.propTypes = {
  urlRoute: PropTypes.string.isRequired,
  iconSvg: PropTypes.string,
};

MenuICon.defaultProps = {
  iconSvg: '',
};

export default MenuICon;
