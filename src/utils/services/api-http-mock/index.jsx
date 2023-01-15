import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @description Récupérer les données principales d'un utilisateur depuis le backend avec l'Api Axios
 * @param {number} id Idenfifiant d'un utilisateur
 * @returns {states} Les données de State retournées
 * @returns {string} states.codeStatus Code Axios d'après le code HTTP indiquant comment s'est passée la requête
 * @returns {Object} states.data Les données principales d'un utilisateur au format JSON
 * @returns {boolean} states.iLoading Les données sont-elle entrain de se charger ?
 * @returns {boolean} states.error Est-ce qu'une erreur est survenue lors du chargement ?
 * @returns {string} states.errorMessage La raison de l'exception levée
 */
export function useFetchUserMock(id) {
  /** @typedef {Object} data Les données principales d'un utilisateur au format JSON */
  const [data, setData] = useState({});
  /** @typedef {boolean} isLoading Les données sont-elle entrain de se charger ? */
  const [isLoading, setLoading] = useState(true);
  /** @typedef {boolean} error  Est-ce qu'une erreur est survenue lors du chargement ? */
  const [error, setError] = useState(false);
  /** @typedef {string} errorMessage  La raison de l'exception levée  */
  const [errorMessage, setErrorMessage] = useState('');
  /** @typedef {string} codeStatus Code Axios d'après le code HTTP indiquant comment s'est passée la requête */
  const [codeStatus, setCodeStatus] = useState(0);

  useEffect(() => {
    /** @type {Object} Configuration de l'instance Axios */ const config = {
      headers: {
        Accept: 'application/json',
      },
      method: 'get',
      timeout: 3000,
      baseURL: '/', // Les données sont obtenues en local dans le dossier public
    };

    /** @type {Object} Création d'une instance Axios paramétrée */
    const http = axios.create(config);
    console.log(`${Date.now()} - Instanciation Axios par api-http-mock`);
    setLoading(true); // Début du chargement des données

    /**
     * @description Récupérer via l'Api les principales données d'un utilisateur
     * @param {number} id L'identifiant de l'utilisateur
     * @returns {states} Les données de State retournées
     * @returns {string} states.codeStatus Code Axios d'après le code HTTP indiquant comment s'est passée la requête
     * @returns {Object} states.data Les données principales d'un utilisateur au format JSON
     * @returns {boolean} states.iLoading Les données sont-elle entrain de se charger ?
     * @returns {boolean} states.error Est-ce qu'une erreur est survenue lors du chargement ?
     * @returns {string} states.errorMessage La raison de l'exception levée
     */
    async function fetchData(id) {
      /** @type {string} Chemin vers le fichier JSON dans le dossier public/ */
      let uri = `${process.env['REACT_APP_LOCAL_FILE']}`;

      // Nettoyer les erreurs précédentes
      //setError(false);
      //setErrorMessage('');

      await http
        .get(uri)
        .then((response) => {
          // Si la réponse est un succès alors renvoyer la propriété data de l'objet JSON
          // Déstructurer data.data: { id, keyData: {...}, todayScore, userInfos: {...}
          const {
            data: {
              data: { USER_MAIN_DATA },
            },
          } = response;
          // Ne conserver que l'utilisateur concerné par le filtre
          const data = USER_MAIN_DATA.filter((item) => item.id === id).shift();
          if (data === undefined || data === null) {
            setError(true);
            setErrorMessage(
              "Aucune donnée mockée correspondant à la demande n'a été trouvée"
            );
          } else {
            // Renseigner les données à retourner
            setData(data);
            setCodeStatus(response.statusText); // Successful responses (200 – 299)
          }
        })
        .catch((error /** est un object AxiosError */) => {
          if (error.response) {
            // si la réponse est en erreur
            console.log(error.response.data);
            console.log(error.response.status); // exemple `Request failed with status code 404`
            console.log(error.response.headers);
          } else if (error.request) {
            // si une erreur est survenue lors de l'envoi de la requête
            console.log(error.request); // les réponses `Server error` sont traitées pour mocker les données  (500 - 599)
          } else {
            // si une erreur est survenue lors de l'initialisation de la requête
            console.log('Error', error.message);
          }
          // affichage de l'objet config utilisé
          console.log(error.config);
          // Renseigner les variables retournées
          setError(true);
          setErrorMessage(error.message);
          setCodeStatus(error.code); // ERR_NETWORK, ERR_BAD_REQUEST
        })
        .finally(() => setLoading(false));
    }

    // L'identifiant utilisateur est mémorisé localement après avoir été obtenu par le routing : /route/:id
    if (isNaN(id)) {
      // Nettoyer
      window.localStorage.removeItem('userId');
      // Avertir
      setData(null);
      setError(true);
      setErrorMessage(`Erreur avec l'identifiant utilisateur`);
      setLoading(false);
    } else {
      fetchData(id);
    }
  }, [id]);

  return { codeStatus, data, isLoading, error, errorMessage };
}

useFetchUserMock.propTypes = {
  id: PropTypes.number.isRequired,
};
