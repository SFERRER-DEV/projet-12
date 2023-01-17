class KeyData {
  /** @type {string[][]} Tableau partagé des noms des données clefs */
  static Keys = [
    ['calorieCount', 'Calories'],
    ['proteinCount', 'Protéïnes'],
    ['carbohydrateCount', 'Glucides'],
    ['lipidCount', 'Lipides'],
  ];

  /** @type {string[][]} Tableau partagé des unités */
  static Units = [
    ['calorieCount', 'kCal'],
    ['proteinCount', 'g'],
    ['carbohydrateCount', 'g'],
    ['lipidCount', 'g'],
  ];

  /**
   * @constructor Les données clefs des utilisateurs :
   * - Calories, protéïnes, glucides, lipides.
   * @param {Keys} key L'identifiant de la donnée clef est son nom de propriété JSON
   * @param {number} data Valeur de la donnée
   */
  constructor(key, data) {
    /** @type {string} */
    this._keyName = key;
    /** @type {number} */
    this._data = data;
  }

  /**
   * @readonly
   * @property {string} keyName Identifiant et nom de la donnée clef
   */
  get keyName() {
    return this._keyName;
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
   * @property {string} designation Appellation de cette donnée clef traduite français
   */
  get designation() {
    /** @type {number} L'index du nom dans le tableau */
    const row = KeyData.Keys.findIndex((arr) => arr.includes(this._keyName));

    return row !== -1 ? KeyData.Keys[row][1] : this._keyName;
  }

  /**
   * @readonly
   * @property {string} unit L'unité dans laquelle la valeur est exprimée (g, Cal, etc ..)
   */
  get unit() {
    /** @type{string } Enumération des unités des données clefs */
    /** @type {number} L'index du nom dans le tableau */
    const row = KeyData.Units.findIndex((arr) => arr.includes(this._keyName));

    return row !== -1 ? KeyData.Units[row][1] : '';
  }
}

export default KeyData;
