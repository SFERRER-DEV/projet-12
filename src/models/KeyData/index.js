/**
 * @description Enumération des noms des données clefs
 * @readonly
 * @enum {string}
 */
const Keys = {
  calorieCount: 'Calories',
  proteinCount: 'Protéïnes',
  carbohydrateCount: 'Glucides',
  lipidCount: 'Lipides',
};

/**
 * @description Enumération des couleurs des données clefs
 * @readonly
 * @enum {string}
 */
const Colors = {
  calorieCount: '#FFE6E6',
  proteinCount: '#CEE5FF',
  carbohydrateCount: '#FFF5CC',
  lipidCount: '#FFE6F9',
};

/**
 * @description Enumération des unités des données clefs
 * @readonly
 * @enum {string}
 */
const Units = {
  calorieCount: 'kCal',
  proteinCount: 'g',
  carbohydrateCount: 'g',
  lipidCount: 'g',
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
   * @property {string} designation Nom de cette donnée clef en français
   */
  get designation() {
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

  /**
   * @readonly
   * @property {string} unit L'unité dans laquelle est exprimée la valeur (g, Cal, etc ..)
   */
  get unit() {
    return Units[this._key];
  }

  /**
   * @readonly
   * @property {string} color Chaque donnée clef a une couleur
   */
  get color() {
    return Colors[this._key];
  }
}

export default KeyData;
