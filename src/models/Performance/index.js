class Performance {
  /** @type {Maps} Une collection partagée de tous les libellés numérotés des performances */
  static _kinds = new Map();

  /**
   * Une performance spécifique de l'utilisateur : cardio, energy, endurance, strength, speed, itensity
   * @constructor
   * @param {number} kind Un indice correspondant à un libellé de performance
   * @param {number} level Le niveau de la performance (valeur)
   * @param {Map} [kinds] La collection partagée des libellés des performances
   */
  constructor(kind, level, kinds = null) {
    /** @type {number} Un indice correspondant à un libellé de performance */
    this._kind = kind;
    /** @type {number} Le niveau de la performance (valeur) */
    this._level = level;
    // Si la collection partagée n'est pas déja définie
    if (Performance._kinds.size === 0 && kinds !== null && kinds.size > 0) {
      // la renseigner avec celle éventuellemnt passée en paramètre au constructeur
      Performance._kinds = kinds;
    }
  }

  /**
   * @readonly
   * @property {number} kind Le numéro d'indice de cette performance
   */
  get kind() {
    return this._kind;
  }

  /**
   * @property {number} level Le niveau de performance
   */
  get level() {
    return this._level;
  }
  set level(value) {
    return (this._level = value);
  }

  /**
   * @readonly
   * @static
   * @property {Map} kinds La collection de tous les libellés numérotés des performances et partagée dans toutes les classes
   */
  static get kinds() {
    return Performance._kinds;
  }

  /**
   * @readonly
   * @property {string} name Le libellé de la performance
   */
  get name() {
    /** @type {number} La taille de la collection partagée */
    const size = Performance.kinds.size;
    let label = '';
    if (size > 0 && this._kind <= size) {
      label = Performance.kinds.get(this._kind);
    }
    return label !== undefined ? (label !== '' ? label : 'Unknown') : 'Unknown';
  }
}

export default Performance;
