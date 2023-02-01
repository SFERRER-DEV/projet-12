import React, { createContext } from 'react';
import { useFetchUser } from '../../services/api-http';
import { useFetchUserMock } from '../../services/api-http-mock';
/** @typedef {import('../typedef').UserContext} Context Raccourci important des types des données du JSON */

export const UserContext = createContext();

/**
 * Contexte pour partager les données d'un utilisateur en allant les chercher avec l'API http soit sur le Backend,
 * soit dans le fichier local data.json
 * @function
 * @param {Object} props
 * @param {number} props.userId L'identifiant utilisateur obtenu depuis le routing
 * @param {any} props.children Les enfants passés au contexte de données
 * @returns {React.Context<any>} Le provider de contexte des données d'un utilisateur
 */
export const UserProvider = (props) => {
  const { userId, children } = props;
  /**
   * @typedef {Object} params
   * @property {number} params.id L'identifiant utilisateur obtenu depuis la route */
  /** @type {params} */
  const haveToMock = parseInt(window.localStorage.getItem('haveToMock')) || 0;
  console.log(`${Date.now()} - UserProvider: haveToMock ? ${haveToMock}`);

  /** @type {Context} */
  const {
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
  } =
    // eslint-disable-next-line react-hooks/rules-of-hooks
    haveToMock === 0 ? useFetchUser(userId) : useFetchUserMock(userId); // Aller chercher les données sur le backend ou localement

  return (
    <UserContext.Provider
      value={{
        /** @type {number} */ userId /** Le renvoyer car a été casté en nombre avant d'être passé aux props  */,
        codeStatus,
        setCodeStatus,
        /** @type {Object} */ data,
        /** @type {Object} */ dataActivity,
        /** @type {Object} */ dataSessions,
        /** @type {Object} */ dataPerformance,
        isLoading,
        setLoading,
        error,
        setError,
        errorMessage,
        setErrorMessage,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
