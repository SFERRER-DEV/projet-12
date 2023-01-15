import React, { createContext } from 'react';
import { useFetchUser } from '../../services/api-http';
/** @typedef {import('../typedef').UserJSON} UserJSON Raccourci important des types des données du JSON */

export const UserContext = createContext();

/**
 * @description Contexte pour partager les données principales d'un utilisateur
 * @param {Object} props
 * @param {*} props.children Les enfants passés au contexte de données
 * @param {boolean} props.haveToMock L'état du mock des données détermine l'adresse pour obtenir les données
 * @returns {Object} Le provider de contexte des données principales de l'utilisateur
 */
export const UserProvider = ({ children }) => {
  /** @type {number} L'identifiant utlisateur a été mémorisé localement  */
  let userId = parseInt(window.localStorage.getItem('userId'));

  /**
   * @typedef {Object} useFetchUser
   * @property {string} codeStatus Code Axios d'après le code HTTP indiquant comment s'est passée la requête
   * @property {UserJSON} data Les données utilisateur au format JSON
   * @property {boolean} isLoading Les données sont-elle entrain de se charger ?
   * @property {boolean} error Est-ce qu'une erreur est survenue lors du chargement ?
   * @property {string} errorMessage La raison de l'erreur
   * @property {boolean} isMocked Les données sont-elle chargées depuis le backend ou obtenues localement ?
   */
  /** @type {useFetchUser} */
  const { codeStatus, data, isLoading, error, errorMessage } =
    useFetchUser(userId);

  // Protection contre la suppression manuelle de l'id de la route dashboard/home/:id
  if (isNaN(userId)) userId = null;

  return (
    <UserContext.Provider
      value={{
        userId,
        codeStatus,
        data,
        isLoading,
        error,
        errorMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
