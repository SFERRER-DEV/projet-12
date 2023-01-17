import React, { createContext } from 'react';
import { useFetchUser } from '../../services/api-http';
import { useFetchUserMock } from '../../services/api-http-mock';
/** @typedef {import('../typedef').UserContext} Context Raccourci important des types des données du JSON */

export const UserContext = createContext();

/**
 * @description Contexte pour partager les données d'un utilisateur en allant les chercher avec l'API http sur le Backend
 * @param {Object} props
 * @param {*} props.children Les enfants passés au contexte de données
 * @returns {Object} Le provider de contexte des données principales de l'utilisateur
 */
export const UserProvider = ({ children }) => {
  const haveToMock = parseInt(window.localStorage.getItem('haveToMock')) || 0
  console.log(`${Date.now()} - UserProvider: haveToMock ? ${haveToMock}`);

  /** @type {number} L'identifiant utlisateur a été mémorisé localement  */
  let userId = parseInt(window.localStorage.getItem('userId'));
  // Protection contre la suppression manuelle de l'id de la route dashboard/home/:id
  if (isNaN(userId)) userId = null;

  /** @type {Context} */
  const {
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
    // eslint-disable-next-line react-hooks/rules-of-hooks
  } = haveToMock === 0 ? useFetchUser(userId) : useFetchUserMock(userId); // Aller chercher les données sur le backend ou localement

  return (
    <UserContext.Provider
      value={{
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
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
