import User from '../../models/User';
import keysDataFactory from '../keysDataFactory';
import KeyData, { Keys } from '../../models/KeyData';
/** @typedef {import('../../utils/context/typedef').UserJSON} UserJSON Raccourci pour importer des types des propriétés JSON */
/** @typedef {import('../../utils/context/typedef').UserInfosJSON} UserInfosJSON Raccourci pour importer des types des propriétés JSON */
/** @typedef {import('../../utils/context/typedef').KeyDataJSON} KeyDataJSON Raccourci pour importer des types des propriétés JSON */

/**
 * Usine pour fabriquer un utilisateur avec ses données clefs à partir des données JSON
 * @param {UserJSON} json Les données JSON d'un utilisateur
 * @returns {Object} manufactured L'utilisateur fabriqué
 * @returns {number} manufactured.id L'identifiant de l'utilisateur
 * @returns {User} manufactured.getUser L'utilisateur
 */
function userFactory(json) {
  const { id, userInfos, todayScore, keyData } = json;

  /**
   * Fabriquer un utilisateur et fabriquer toutes ses données clefs
   * @returns {User} Un utilisateur
   */
  function getUser() {
    /** @type {User} L'utilisateur en fabrication */
    let user = new User(
      id,
      userInfos.firstName,
      userInfos.lastName,
      userInfos.age,
      todayScore
    );

    /** @type {keysDataFactory} Factory Method qui fabrique les données clefs de l'utilisateur à partir des données JSON */
    const keysDataModel = keysDataFactory(keyData);
    // Fabriquer les données clefs de l'utilisateur et renseigner et compléter l'utilisateur en fabrication
    user.keysData = keysDataModel.getKeysData();

    return user;
  }
  return { id, getUser };
}

export default userFactory;