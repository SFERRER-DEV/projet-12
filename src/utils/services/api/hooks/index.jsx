import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @description Récupérer les données principales d'un utilisateur avec l'Api Axios
 * @param {number} id Idenfifiant d'un utilisateur
 * @returns {stateReturns} Les données de State
 * @returns {Object} stateReturns.data Les données principales d'un utilisateur au format JSON
 * @returns {boolean} stateReturns.iLoading Les données sont-elle entrain de se charger ?
 * @returns {boolean} stateReturns.error Est-ce qu'une erreur est survenue lors du chargement ?
 * @returns {string} stateReturns.errorMessage La raison de l'exception levée
 */
export function useFetchUser(id) {
  /** @typedef {Object} data Les données principales d'un utilisateur au format JSON */
  const [data, setData] = useState({});
  /** @typedef {boolean} isLoading Les données sont-elle entrain de se charger ? */
  const [isLoading, setLoading] = useState(true);
  /** @typedef {boolean} error  Est-ce qu'une erreur est survenue lors du chargement ? */
  const [error, setError] = useState(false);
  /** @typedef {string} errorMessage  La raison de l'exception levée  */
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    /** @type {Object} Configuration de l'instance Axios */
    let config = {
      headers: {
        Accept: 'application/json',
      },
      method: 'get',
      timeout: 5000,
      baseURL: process.env['REACT_APP_SERVER_URL'],
    };
    /** @type {Object} Création d'une instance Axios paramétrée */
    const http = axios.create(config);
    console.log(`${Date.now()} - Instanciation Axios`);
    //
    setLoading(true);
    /**
     * @description Récupérer via l'Api les principales données d'un utilisateur
     * @param {number} id L'identifiant de l'utilisateur
     * @returns {void}
     */
    async function fetchData(id) {
      /** @type {string} Point de terminaison de l'API pour récupérer les données principales d'un utlisateur*/
      const uri = `${process.env['REACT_APP_GET_USER']}/${id}`;
      // Nettoyer les erreurs précédentes
      setError(false);
      setErrorMessage('');

      await http
        .get(uri)
        .then((response) => {
          // Si la réponse est un succès alors renvoyer la propriété data de l'objet JSON
          // Destructurer data.data: { id, keyData: {...}, todayScore, userInfos: {...}
          const {
            data: { data },
          } = response;
          setData(data);
        })
        .catch((error /** est un object AxiosError */) => {
          if (error.response) {
            // si la réponse est en erreur
            console.log(error.response.data);
            console.log(error.response.status); // exemple Request failed with status code 404
            console.log(error.response.headers);
          } else if (error.request) {
            // si une erreur est survenue lors de l'envoi de la requête
            console.log(error.request); // exemple Network Error
          } else {
            // si une erreur est survenue lors de l'initialisation de la requête
            console.log('Error', error.message);
          }
          // affichage de l'objet config utilisé
          console.log(error.config);
          setError(true);
          setErrorMessage(error.message);
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

  return { data, isLoading, error, errorMessage };
}

useFetchUser.propTypes = {
  id: PropTypes.number.isRequired,
};
