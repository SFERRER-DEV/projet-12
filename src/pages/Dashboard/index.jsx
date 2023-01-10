import React from 'react';
import { useParams, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { UserProvider } from '../../utils/context';
import HomeMenu from '../../components/dashboard/HomeMenu';
import DemoMenu from '../../components/dashboard/DemoMenu';

/** @type {Object} Le contenu principal de la page est dans une balise `<main>` */
const Container = styled.main`
  display: flex;
  flex-direction: column;
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-row: auto / span 2;
`;

/**
 * @description Page tableau de bord: Accueil utilisateur
 * @param {Object} props
 * @param {string} props.menu Le nom du tableau de bord sélectionné dans le menu
 * @returns {JSX.Element} La page d'accueil du tableau de bord
 */
function Dashboard(props) {
  const { menu } = props;
  /**
   * @typedef {Object} params
   * @property {number} id L'identifiant d'un utilisateur obtenu depuis la route
   */
  /** @type {params} */
  const { id } = useParams();

  /** @type {number} userId L'identifiant de cet utilisateur mémorisé dans le State */
  //const userId = useState(id);

  const location = useLocation();
  /** @type {boolean} isHomeMenu La route actuelle est-elle celle de l'accueil du tableau de bord ? */
  const isHomeMenu = location.pathname
    .toLowerCase()
    .startsWith('/dashboard/home/');

  return (
    <UserProvider id={id}>
      <Container>
        {isHomeMenu ? <HomeMenu /> : <DemoMenu id={id} menu={menu} />}
      </Container>
    </UserProvider>
  );
}

export default Dashboard;
