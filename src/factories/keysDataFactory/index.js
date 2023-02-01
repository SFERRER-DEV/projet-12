import KeyData from '../../models/KeyData';
/** @typedef {import('../../utils/context/typedef').KeyDataJSON} KeyDataJSON Raccourci pour importer des types des propriétés JSON */

/**
 * Usine pour fabriquer un utilisateur avec ses données clefs à partir des données JSON
 * @class
 * @param {KeyDataJSON} json Les données JSON d'un utilisateur
 * @returns {Array.<KeyData>} Un tableau des données clés typées KeyData
 */
function keysDataFactory(json) {
  const { calorieCount, proteinCount, carbohydrateCount, lipidCount } = json;

  /**
   *
   * @returns {Array.<KeyData>}
   */
  function getKeysData() {
    const keysData = [];
    keysData.push(new KeyData('calorieCount', calorieCount));
    keysData.push(new KeyData('proteinCount', proteinCount));
    keysData.push(new KeyData('carbohydrateCount', carbohydrateCount));
    keysData.push(new KeyData('lipidCount', lipidCount));
    return keysData;
  }

  return { getKeysData };
}

export default keysDataFactory;
