import axios from 'axios';
import { useState, useEffect } from 'react';
/** @typedef {import('../../context/typedef').UserContext} UserContext Raccourci pour importer des types des propriétés JSON */

/**
 * @description Service pour récupérer les données mockées d'un utilisateur dans le le fichier local avec l'Api Axios
 * @param {number | undefined} userId Idenfifiant d'un utilisateur
 * @returns {UserContext} Les données de State à retourner et leurs fonctions de mise à jour
 */
export function useFetchUserMock(userId) {
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
  const [codeStatus, setCodeStatus] = useState(0);

  useEffect(() => {
    /** @type {Object} Configuration de l'instance Axios */
    const config = {
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
     * @param {number} userId L'identifiant de l'utilisateur
     * @returns {void}
     */
    async function fetchData(userId) {
      /** @type {string} Chemin vers le fichier JSON dans le dossier public/ */
      let uri = `${process.env['REACT_APP_LOCAL_FILE']}`;
      // Nettoyer les erreurs précédentes
      setError(false);
      setErrorMessage('');
      // Requêter
      await http
        .get(uri)
        .then((response) => {
          // Si la réponse est un succès alors déstructurer la propriété data du fichier json} }
          const {
            data: {
              data: {
                USER_MAIN_DATA,
                USER_PERFORMANCE,
                USER_ACTIVITY,
                USER_AVERAGE_SESSIONS,
              },
            },
          } = response;
          // Successful responses (200 – 299)
          setCodeStatus(response.statusText);
          console.log(`${uri} => ${response.statusText}`);
          /** @type {Array<Array<[string, Object, Function]>>} Tableau  contenant le nom de toutes les rubriques json avec leurs données json déstructurées correpondantes et leurs fonctions de mise à jour du State correspondantes */
          const allData = [
            ['USER_MAIN_DATA', USER_MAIN_DATA, setUserData],
            ['USER_ACTIVITY', USER_ACTIVITY, setDataActivity],
            ['USER_AVERAGE_SESSIONS', USER_AVERAGE_SESSIONS, setDataSessions],
            ['USER_PERFORMANCE', USER_PERFORMANCE, setDataPerformance],
          ];
          // Aller chercher toutes les données et les mémoriser dans le State
          findAllData(userId, allData, setError, setErrorMessage);
        })
        .catch((error /** est un object AxiosError */) => {
          // affichage de l'objet config utilisé
          //console.log(error.config);
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
          // Renseigner les variables de States
          setError(false);
          setErrorMessage('');
          setErrorMessage(error.message);
          setCodeStatus(error.code); // ERR_NETWORK, ERR_BAD_REQUEST
        })
        .finally(() => setLoading(false));
    }

    // Aller chercher toutes les données mockées d'un utilisateur
    fetchData(userId);
  }, [userId]);

  return {
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

/**
 * @description ReCherche pour un utilisateur toutes les données c'est à dire les principales, d'activité, de performance et de sessions.
 * Les différentes données trouvées sont mémorisées avec leurs fonctions spécifiques de mise à jour du State.
 * Si des données ne sont pas trouvées alors la recherche s'arrête et nous avertie de l'erreur.
 * @param {number} userId L'identifiant d'un utilisateur
 * @param {Array<Array<[string, Object, Function]>>} allData Tableau 2d contenant le nom de toutes les rubriques json, les données json déstructurées correpondantes et les fonctions respectives de mise à jour du State
 * @param {Function} setError
 * @param {Function} setErrorMessage
 * @returns {Object} Retourne l'objet json trouvé
 */
const findAllData = (userId, allData, setError, setErrorMessage) => {
  //
  allData.every((item) => {
    /** @type {string} Le nom de la rubrique json */
    const cat = item[0];
    /** @type {Object} La section json correspondant à cette rubrique */
    const data = item[1];
    /** @type {Function} Un lien vers l'adresse de la fonction de mise à jour du State à utiliser */
    const setFunction = item[2];
    /**
     * @typedef findData Retourne l'objet json trouvé (ou  sinon vide)
     * @property {boolean} find Est-ce que les données de cet utilisateur ont été trouvées ?
     * @property {Object} json  L'objet json trouvé ou un objet vide {}
     */
    /** @type {findData} */
    const { find, json } = findData(data, userId);
    if (!find) {
      setError(true);
      setErrorMessage(
        `Aucune donnée mockée n'a été trouvée dans la partie ${cat} du fichier json pour l'identifiant ${userId}`
      );
      return false;
    } else {
      // Renseigner les données
      setFunction(json);
      return true;
    }
  });
};

/**
 * @description Chercher un objet de données json d'après un identifiant utilisateur dans un tableau d'objets json
 * @param {Object[]} data Un tableau d'objets json obtenu depuis une rubrique json des données mockées
 * @param {number} userId Un identifiant utilisateur  (attention à userId ~ id)
 * @returns {Object} findData
 * @returns {boolean} findData.find Est-ce que les données de cet utilisateur ont été trouvées ?
 * @returns {Object} findData.json  L'objet json trouvé ou un objet vide {}
 */
const findData = (data, userId) => {
  // L'identifiant utlisateur est nommé de deux façons différentes dans les fichier json : id ~ userId
  /** @type {boolean} L'identifiant utilisateur est nommé `id` dans ces données json */
  const ok = data.every((item) => item.hasOwnProperty('id'));
  /** @type {boolean} L'identifiant utilisateur est nommé `userId` dans ces données json */
  const ko = data.every((item) => item.hasOwnProperty('userId'));
  /** @type {boolean} Est-ce que les données de cet utilisateur ont été trouvées ? */
  let find = false;

  /** @type {Object} L'objet json à retourner */
  let json;
  if (ok) {
    json = data.filter((item) => item.id === userId).shift(); // Trouver les données
  } else if (ko) {
    json = data.filter((item) => item.userId === userId).shift(); // Trouver les données
  }
  if (json !== undefined) {
    find = true;
  }

  return { find: find, json: json === undefined ? {} : json };
};
