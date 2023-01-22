class User {
  /**
   * @constructor Une classe pour instancier un utilisateur
   * @param {number} id
   * @param {string} firstName
   * @param {string} lastName
   * @param {number} age
   * @param {number} todayScore Score du jour de l'utilisateur
   * @param {Array.<KeyData>} [keysData] Le tableau des données clés de l'utilisateur
   * @param {Array.<Performance>} [performances] Le tableau des performances de l'utilisateur
   * @param {Array.<Session>} [sessions] Le tableau des sessions de l'utilisateur
   * @param {Array.<Activity>} [activities] Le tableau des activités de l'utilisateur
   */
  constructor(
    id,
    firstName,
    lastName,
    age,
    todayScore,
    keysData = [],
    performances = [],
    sessions = [],
    activities = []
  ) {
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
    /** @type {Array<Performance>} */
    this._performances = performances;
    /** @type {Array<Session>} */
    this._sessions = sessions;
    /** @type {Array<Activity>} */
    this._activities = activities;
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
    this._todayScore = value;
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

  /**
   * @property {Array<Performance>} Un tableau des performances
   */
  get performances() {
    return this._performances;
  }
  set performances(value) {
    this._performances = value;
  }

  /**
   * @property {Array<Sessions>} Un tableau des sessions
   */
  get sessions() {
    return this._sessions;
  }
  set sessions(value) {
    this._sessions = value;
  }

  /**
   * @property {Array<Activity>} Un tableau des activités
   */
  get activities() {
    return this._activities;
  }
  set activities(value) {
    this._activities = value;
  }
}

export default User;
