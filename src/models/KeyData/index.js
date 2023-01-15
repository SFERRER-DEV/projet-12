/**
 * @description Enumération des noms des données clefs
 * @readonly
 * @enum {string}
 */
export const Keys = {
  calorieCount: 'Calories',
  proteinCount: 'Protéïnes',
  carbohydrateCount: 'Glucides',
  lipidCount: 'Lipides',
};

class KeyData {
  /**
   * @constructor Les données clefs des utilisateurs :
   * - Calories, protéïnes, glucides, lipides.
   * @param {Keys} key Une donnée clef identifiée par le nom de sa propriété JSON
   * @param {number} data Valeur de la donnée
   */
  constructor(key, data) {
    /** @type {string} */
    this._key = key;
    /** @type {number} */
    this._data = data;
  }

  /**
   * @readonly
   * @property {string} key identifiant clef
   */
  get key() {
    return this._key;
  }

  /**
   * @readonly
   * @property {string} name Nom de cette donnée clef
   */
  get name() {
    return Keys[this._key];
  }

  /**
   * @property {number} key Valeur de la donnée
   */
  get data() {
    return this._data;
  }
  set data(value) {
    this._data = value;
  }
}

export default KeyData;
