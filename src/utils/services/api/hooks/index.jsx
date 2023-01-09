import axios from 'axios';
import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

/**
 * @description Récupérer les données principales d'un utilisateur avec l'Api Axios
 * @param {number} id Idenfifiant d'un utilisateur
 * @returns {stateReturns} Les données de State
 * @returns {Object} stateReturns.data Les données principales d'un utilisateur au format JSON
 * @returns {boolean} stateReturns.isDataLoading Les données sont-elle entrain de se charger ?
 * @returns {boolean} stateReturns.error Est-ce qu'une erreur est survenue lors du chargement ?
 */
export function useFetchUser(id) {
  /** @typedef {Object} data Les données principales d'un utilisateur au format JSON */
  const [data, setData] = useState({});
  /** @typedef {boolean} isLoading Les données sont-elle entrain de se charger ? */
  const [isLoading, setLoading] = useState(true);
  /** @typedef {boolean} error  Est-ce qu'une erreur est survenue lors du chargement ? */
  const [error, setError] = useState(false);

  useEffect(() => {
    /** @type {Object} Configuration de l'instance Axios */
    let config = {
      headers: {
        Accept: 'application/json',
      },
      method: 'get',
      timeout: 3000,
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
      try {
        //
        const response = await http.get(uri);
        // Si la réponse est un succès alors renvoyer la propriété data de l'objet JSON
        // Destructurer data.data: { id, keyData: {...}, todayScore, userInfos: {...}
        const {
          data: { data },
        } = response;
        //
        setData(data);
      } catch (err) {
        console.log(err);
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchData(id);
  }, [id]);

  return { data, isLoading, error };
}

useFetchUser.propTypes = {
  id: PropTypes.number.isRequired,
};
