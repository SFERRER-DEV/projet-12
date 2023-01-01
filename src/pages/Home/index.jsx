import styled from 'styled-components';
import colors from '../../utils/style/colors';
import logo from '../../assets/logo.svg';
/**
 * Page d'accueil
 * @returns {JSX.Element} La page Home
 */
function Home() {
  return (
    <main>
      <h1>SportSee</h1>
      {<img src={logo} className="App-logo" alt="logo" />}
    </main>
  );
}

export default Home;
