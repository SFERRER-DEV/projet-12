import Activity from '../../models/Activity';
/** @typedef {import('../../utils/context/typedef').DataActivityJSON} DataActivityJSON Raccourci pour importer des types des propriétés JSON */
/** @typedef {import('../../utils/context/typedef').ActivityJSON} ActivityJSON Raccourci pour importer des types des propriétés JSON */

/**
 * @description Usine pour fabriquer un tableau des jours d'activité d'un utilisateur à partir des données JSON
 * @param {ActivityJSON} json Les données JSON des activités d'un utilisateur
 * @returns {Object} manufactured
 * @returns {number} manufactured.userId L'identifiant utilisateur
 * @returns {Activity[]} manufactured.getActivities Les jours d'activité de l'utilisateur
 */
function activityFactory(json) {
  const { userId, sessions } = json;

  /**
   * Créer une activité
   * @class
   * @param {Date} day La date yyyy-mm-dd de l'activité
   * @param {number} kilogram Le poids utilisateur
   * @param {number} calories Les calories consommées
   * @returns {Activity} L'activité fabriquée
   */
  function getActivity(day, kilogram, calories) {
    return new Activity(day, kilogram, calories);
  }
  /**
   * Créer tous les jours d'activités
   * @returns {Activity[]}  Un tableau des activités de l'utilisateur
   */
  function getActivities() {
    /** @type {Activity[]} Un tableau des objets fabriqués de type Activité */
    let arr = [];
    if (sessions === undefined) {
      console.error('getActivities(): sessions === undefined');
      return []; // @TODO /!\
    }
    // Parcourir toutes les données json des durées de sessions pour instancier des objets typés
    sessions.forEach((a /** @type {ActivityJSON} */) => {
      /** @type {Activity} */
      const activity = getActivity(a.day, a.kilogram, a.calories);
      arr.push(activity);
    });
    return arr;
  }

  return { userId, getActivities };
}

export default activityFactory;
