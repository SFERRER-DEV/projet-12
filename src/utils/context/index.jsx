import React, { createContext } from 'react';
import { useFetchUser } from '../../utils/services/api/hooks';
/** @typedef {import('./typedef').UserJSON} UserJSON Raccourci important des types des données du JSON */

export const UserContext = createContext();

/**
 * @description Contexte pour partager les données principales d'un utilisateur
 * @param {Object} props Propriétés destructurées id, children
 * @param {string} props.id L'identifiant utilisateur utilisé pour chercher les données sur l'Api
 * @param {*} props.children Les enfants passés au contexte de données
 * @returns {Object} Le provider de contexte des données principales de l'utilisateur
 */
export const UserProvider = (props) => {
  const { id, children } = props;
  /**
   * @typedef {Object} useFetchUser
   * @property {UserJSON} data Les données utilisateur au format JSON
   * @property {boolean} isLoading Les données sont-elle entrain de se charger ?
   * @property {boolean} error Est-ce qu'une erreur est survenue lors du chargement ?
   * @property {string} errorMessage La raison de l'erreur
   */
  /** @type {useFetchUser} */
  const { data, isLoading, error, errorMessage } = useFetchUser(id);

  return (
    <UserContext.Provider
      value={{
        id,
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
