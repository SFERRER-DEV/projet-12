import styled from 'styled-components';

/** @type {Object} Le contenu principal de la page est dans une balise `<main>` à positionner dans une Grid */
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
 * Page de démo pour les autres routes
 * @returns {JSX.Element} Une page de démo
 */
function DemoPage(props) {
  const { pageName } = props;
  return (
    <Container>
      <h1>{pageName}</h1>
      <h2>DemoPage</h2>
    </Container>
  );
}

export default DemoPage;
