class Session {
  /** @type {string[]} Un tableau des noms des jours de la semaine numérotés de 1 à 7 */
  static weekday = [
    null, // 0
    'Lundi', // 1
    'Mardi',
    'Mercredi',
    'Jeudi',
    'Vendredi',
    'Samedi',
    'Dimanche', // 7
  ];

  /**
   * Une Session quotidienne
   * @constructor
   * @param {number} day Jour de la semaine
   * @param {number} sessionLength Durée de session
   */
  constructor(day, sessionLength) {
    /** @type {number} */
    this._day = day;
    /** @type {number} */
    this._sessionLength = sessionLength;
  }
  /**
   * @readonly
   * @property {number} day Le numéro du jour de semaine
   */
  get day() {
    return this._day;
  }

  /**
   * @property {number} sessionLength La durée de la session
   */
  get sessionLength() {
    return this._sessionLength;
  }
  set sessionLength(value) {
    return (this._sessionLength = value);
  }

  /**
   * @description  Obtenir l'initiale du jour de ce numéro dans la semaine
   * @param {number} day Numéro du jour de la semaine de 1 à 7
   * @returns {string} La première lettre du jour de la semaine
   */
  firstLetter() {
    return Session.weekday[this._day].charAt(0).toUpperCase();
  }
}

export default Session;
