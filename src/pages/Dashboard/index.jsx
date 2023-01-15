import styled from 'styled-components';
import colors from '../../utils/style/colors';

/** @type {Object} Le contenu principal de la page est dans une balise `<main>` */
const Content = styled.main`
  grid-column-start: 2;
  grid-column-end: 2;
  grid-row-start: 2;
  grid-row-end: 3;
  grid-row: auto / span 2;
`;

/**
 * Page tableau de bord: Accueil
 * @returns {JSX.Element} La page Home
 */
function Dashboard(props) {
  const { pageName } = props;
  return (
    <Content>
      <h1>{pageName}</h1>
    </Content>
  );
}

export default Dashboard;
