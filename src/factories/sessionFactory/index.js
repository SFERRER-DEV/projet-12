import Session from '../../models/Session';
/** @typedef {import('../../utils/context/typedef').DataSessionJSON} DataSessionJSON Raccourci pour importer des types des propriétés JSON */
/** @typedef {import('../../utils/context/typedef').SessionJSON} SessionJSON Raccourci pour importer des types des propriétés JSON */

/**
 * Usine pour fabriquer un tableau des sessions de la semaine d'un utilisateur à partir des données JSON
 * @class
 * @param {SessionJSON} json Les données JSON des sessions d'un utilisateur
 * @returns {Object} manufactured
 * @returns {number} manufactured.userId L'identifiant utilisateur
 * @returns {Session[]} manufactured.getSessions Les sessions hebdomaraires de l'utilisateur
 */
function sessionFactory(json) {
  const { userId, sessions } = json;

  /**
   * Créer une session
   * @class
   * @param {number} day Numéro du jour de la semaine
   * @param {number} sessionLength La durée de la session
   * @returns {Session} La session fabriquée
   */
  function getSession(day, sessionLength) {
    return new Session(day, sessionLength);
  }
  /**
   * Créer toutes les sessions de la semaine
   * @returns {Sessions[]}  Un tableau des sessions hebdomaraires de l'utilisateur
   */
  function getSessions() {
    /** @type {Sessions[]} Un tableau des objets fabriqués de type Session */
    let arr = [];
    if (sessions === undefined) {
      // FIXME: getSessions(): sessions === undefined
      console.error('getSessions(): sessions === undefined');
      return [];
    }
    // Parcourir toutes les données json des durées de sessions pour instancier des objets typés
    sessions.forEach((s /** @type {DataSessionJSON} */) => {
      /** @type {Session} */
      const session = getSession(s.day, s.sessionLength);
      arr.push(session);
    });
    return arr;
  }

  return { userId, getSessions };
}

export default sessionFactory;
