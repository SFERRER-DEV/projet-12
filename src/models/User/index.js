import KeyData from '../KeyData';

class User {
  /**
   * @constructor Une classe pour instancier un utilisateur
   * @param {number} id
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} age
   * @param {number} todayScore
   * @param {Array.<KeyData>} [keysData] Un tableau des données clés de l'utilisateur
   */
  constructor(id, firstName, lastName, age, todayScore, keysData = []) {
    /** @type {number} */
    this._id = id;
    /** @type {string} */
    this._firstName = firstName;
    /** @type {string} */
    this._lastName = lastName;
    /** @type {number} */
    this._age = age;
    /** @type {number} */
    this._todayScore = todayScore;
    /** @type {Array<KeyData>} */
    this._keysData = keysData;
  }

  /**
   * @readonly
   * @property {number} Identifiant utilisateur
   */
  get id() {
    return this._id;
  }

  /**
   * @readonly
   * @property {string} Prénom utilisateur
   */
  get firstName() {
    return this._firstName;
  }

  /**
   * @readonly
   * @property {string} Nom de famille utilisateur
   */
  get lastName() {
    return this._lastName;
  }

  /**
   * @property {number} Âge de l'utilisateur
   */
  get age() {
    return this._age;
  }
  set age(value) {
    this._age = value;
  }

  /**
   * @property {number} Le score du jour
   */
  get todayScore() {
    return this._todayScore;
  }
  set todayScore(value) {
    this._age = value;
  }

  /**
   * @property {Array<KeyData>} Un tableau de toutes les données clés
   */
  get keysData() {
    return this._keysData;
  }
  set keysData(value) {
    this._keysData = value;
  }
}

export default User;
