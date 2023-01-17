import Performance from '../../models/Performance';
/** @typedef {import('../../utils/context/typedef').PerformanceJSON} PerformanceJSON Raccourci pour importer des types des propriétés JSON */
/** @typedef {import('../../utils/context/typedef').DataPerformanceJSON} DataPerformanceJSON Raccourci pour importer des types des propriétés JSON */

/**
 * @description Usine pour fabriquer un tableau de toutes les performances d'un utilisateur
 * cardio, energy, endurance, strength, speed, itensity
 * @param {PerformanceJSON} json Les données JSON des performances d'un utilisateur
 * @returns {Object} manufactured Les performances fabriquées d'un utilisateur
 * @returns {number} manufactured.userId L'identifiant utilisateur
 * @returns {Performance[]} manufactured.getPerformances Tous les niveaux de performance de l'utilisateur
 */
function performanceFactory(json) {
  const { userId, kind, data } = json;

  /**
   * Créer une performance
   * La 1ere performance instanciée crée la collection partagée des libellés
   * @class
   * @param {number} num Numéro de performance
   * @param {number} level Le niveau de la performance
   * @returns {Performance} La performance fabriquée
   */
  function getPerformance(num, level) {
    /** @type{Map} La collection partagée des libellés */
    let kinds = null;
    // Les libellés numérotés des performances sont fournis une seule fois pour toute
    if (Performance.kinds.size === 0) {
      if (kind === undefined) {
        // @TODO /!\
        console.error('getPerformance(): kind === undefined');
      } else {
        kinds = getLabels(kind);
      }
    }
    return new Performance(num, level, kinds);
  }

  /**
   * Créer toutes les niveaux de performance de l'utilisateur
   * @returns {Performance[]} Un tableau des niveaux de performance utilisateur
   */
  function getPerformances() {
    /** @type {Performance[]} Un tableau des objets fabriqués de type Performance */
    let performances = [];
    if (data === undefined) {
      console.error('getPerformances: data === undefined');
      return []; // @TODO /!\
    }
    // Parcourir toutes les données json des niveaux de performance pour instancier des objets typés
    data.forEach((p /** @type {DataPerformanceJSON} */) => {
      /** @type {Performance} */
      const performance = getPerformance(p.kind, p.value);
      performances.push(performance);
    });
    return performances;
  }

  return { userId, getPerformances };
}

/**
 * @description Mettre la 1ere lettre en majuscule
 * @param {string} str Un libellé de performance
 * @returns {string} Une chaine en minuscule avec la 1ere lettre en majuscule
 */
function capitalizeFirstLetter(str) {
  let ret = '';
  try {
    ret = str.toString().charAt(0).toUpperCase() + str.slice(1);
  } catch (error) {
    console.log('capitalizeFirstLetter', error.message);
  }
  return ret;
}

/**
 * @description Tranduire le nom des performances en français
 * (car les performances sont nommées en anglais dans le json)
 * @param {string} str Un libellé de performance en anglais
 * @param {string} str Un libellé de performance traduit en français
 */
function translate(str) {
  /** @type {string[][]} Un tableau 2d pour traduire le nom de compétence en français depuis l'anglais dans le json */
  const fr = [
    ['intensity', 'intensité'],
    ['speed', 'vitesse'],
    ['strength', 'force'],
    ['endurance', 'endurance'],
    ['energy', 'énergie'],
    ['cardio', 'cardio'],
  ];
  /** @type {number} L'index du nom en anglais dans le tableau */
  const row = fr.findIndex((arr) => arr.includes(str));

  return row !== -1 ? fr[row][1] : str;
}

/**
 * @description Obtenir tous les libellés numérotés des performances  avec une mise en forme
 * dans une collection de type Map
 * @param {Object} kind Un objet json de tous les libellés numérotés des performances
 * @returns {Map} La collection des libellés numérotés
 */
function getLabels(kind) {
  /** @type {Map} Stock les libellés uniques des performances traquées   */
  const labels = new Map();

  /** @type {string} Chaine de caractères convertie à partir du json de la propriété kind*/
  const str = JSON.stringify(kind);
  JSON.parse(str, (key, value) => {
    if (
      (typeof value === 'string' || value instanceof String) &&
      (typeof key === 'string' || key instanceof String)
    ) {
      labels.set(Number(key), capitalizeFirstLetter(translate(value)));
    }
  });

  return labels;
}

export default performanceFactory;
