import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import colors from '../../utils/style/colors';

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
 * @description Un composant pour afficher une entrée du menu de navigation latérale avec une icône dans un lien
 * @param {Object} props Les propriétés destructurées: name et userId
 * @param {string} props.urlRoute  L'url vers laquelle l'icône pointe (Route)
 * @param {string} props.iconSvg Le fichier de l'icône au format svg
 * @param {string} props.altText Texte aternatif de l'image
 * @returns {React.ReactElement} Un composant MenuIcon
 */
function MenuICon(props) {
  const { urlRoute, iconSvg, altText } = props;

  return (
    <Link to={urlRoute}>
      <Container>
        <Icon src={iconSvg} alt={altText} />
      </Container>
    </Link>
  );
}

export default MenuICon;
