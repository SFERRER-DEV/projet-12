class Performance {
  /**
   * @constructor Une performance spécifique de l'utilisateur
   * @param {string} kind Un type de performance: cardio, energy, endurance, strength, speed, itensity
   * @param {number} level Le niveau cette performance (valeur)
   */
  constructor(kind, level) {
    /** @type {string} */
    this._kind = kind;
    /** @type {number} */
    this._level = level;
  }

  /**
   * @readonly
   * @property {string} kind Le type de cette performance utilisateur
   */
  get kind() {
    return this._kind;
  }

  /**
   * @property {number} level Le niveau de performance
   */
  get level() {
    return this._value;
  }
  set level(value) {
    this._level = value;
  }
}

export default Performance;
