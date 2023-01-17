import axios from 'axios';
import { useState, useEffect } from 'react';
/** @typedef {import('../../context/typedef').UserContext} UserContext Raccourci pour importer des types des propriétés JSON */

/**
 * @description Service pour récupérer les données mockées d'un utilisateur dans le le fichier  avec l'Api Axios
 * @param {number} id Idenfifiant d'un utilisateur
 * @returns {UserContext} Les données de State à retourner et leurs fonctions de mise à jour
 */
export function useFetchUser(id) {
  /** @typedef {Object} data Les données principales d'un utilisateur au format JSON */
  const [data, setUserData] = useState({});
  /** @typedef {Object} dataActivity Les données de l'activité quotidienne d'un utilisateur au format JSON */
  const [dataActivity, setDataActivity] = useState({});
  /** @typedef {Object} dataPerformances Les données des niveaux des performances d'un utilisateur au format JSON */
  const [dataPerformance, setDataPerformance] = useState({});
  /** @typedef {Object} dataSessions Les données quotidiennes de la durée des sessions d'un utilisateur au format JSON */
  const [dataSessions, setDataSessions] = useState({});
  /** @typedef {boolean} isLoading Les données sont-elle entrain de se charger ? */
  const [isLoading, setLoading] = useState(true);
  /** @typedef {boolean} error  Est-ce qu'une erreur est survenue lors du chargement ? */
  const [error, setError] = useState(false);
  /** @typedef {string} errorMessage  La raison de l'exception levée  */
  const [errorMessage, setErrorMessage] = useState('');
  /** @typedef {string} codeStatus Code Axios d'après le code HTTP indiquant comment s'est passée la requête */
  const [codeStatus, setCodeStatus] = useState('');

  useEffect(() => {
    /** @type {Object} Configuration de l'instance Axios */
    const config = {
      headers: {
        Accept: 'application/json',
      },
      method: 'get',
      timeout: 10000,
      baseURL: process.env['REACT_APP_SERVER_URL'], // les données sont cherchées sur le backend
    };

    /** @type {Object} Création d'une instance Axios paramétrée */
    const http = axios.create(config);
    console.log(`${Date.now()} - Instanciation Axios par api-http`);
    setLoading(true); // Début du chargement des données

    /**
     * @description Récupérer via l'Api les principales données d'un utilisateur
     * @param {number} id L'identifiant de l'utilisateur
     * @param {string} [endpoint] Une requête pour obtenir des données (.env)
     * @param {Function} [setData] Une fonction de mise à jour du State spécifique à ce endpoint
     * @returns {void}
     */
    async function fetchData(id, endpoint = '', setData = setUserData) {
      /** @type {string} Requête pour pour récupérer des données avec un des endpoints de l'API http */
      const uri = `${process.env['REACT_APP_GET_USER']}/${id}${
        endpoint === '' ? '' : `${endpoint}`
      }`;
      // Nettoyer les erreurs précédentes
      setError(false);
      setErrorMessage('');
      // Requêter
      await http
        .get(uri)
        .then((response) => {
          // Si la réponse est un succès alors déstructurer les propriétés imbriquées data.data
          const {
            data: { data },
          } = response;
          // Successful responses (200 – 299)
          setCodeStatus(response.statusText);
          console.log(`${uri} => ${response.statusText}`);
          // Renseigner les données dans le State grâce à la fonction spécifique passée en paramètre
          setData(data);
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
          setCodeStatus(error.code); // ERR_NETWORK, ERR_BAD_REQUEST,
        })
        .finally(() => setLoading(false));
    }

    // Aller chercher les données principales de l'utilisateur
    fetchData(id); // #1
    // Obtenir les données d'activité
    fetchData(id, process.env['REACT_APP_GET_ACTIVITY'], setDataActivity);
    // Obtenir les données des sessions
    fetchData(id, process.env['REACT_APP_GET_SESSIONS'], setDataSessions);
    // Obtenir les données de performance
    fetchData(id, process.env['REACT_APP_GET_PERFORMANCE'], setDataPerformance);
  }, [id]);

  return {
    id,
    codeStatus,
    setCodeStatus,
    data,
    dataActivity,
    dataSessions,
    dataPerformance,
    isLoading,
    setLoading,
    error,
    setError,
    errorMessage,
    setErrorMessage,
  };
}
