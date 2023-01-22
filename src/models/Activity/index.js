class Activity {
  /**
   * @constructor Une session d'activité
   * @param {Date} day La date  yyyy-mm-dd de la session de l'activité
   * @param {number} kilogram Le poids du jour
   * @param {number} calories Les calories consommés
   */
  constructor(day, kilogram, calories) {
    /** @type {number}  */
    this._day = day;
    /** @type {number}  */
    this._kilogram = kilogram;
    /** @type {number} ) */
    this._calories = calories;
  }

  /**
   * @readonly
   * @property {Date} day Le date yyyy-mm-dd de la session d'activité
   */
  get day() {
    return this._day;
  }

  /**
   * @readonly
   * @property {number} kilogram Le poids du jour
   */
  get kilogram() {
    return this._kilogram;
  }

  /**
   * @readonly
   * @property {number} calories Les calories consommées par la session d'activité
   */
  get calories() {
    return this._calories;
  }
}

export default Activity;
