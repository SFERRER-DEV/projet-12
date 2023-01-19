import Performance from '../../models/Performance';

/** @typedef {import('../../utils/context/typedef').PerformanceJSON} PerformanceJSON Raccourci pour importer des types des propriétés JSON */

/**
 * @description Usine pour fabriquer les tableaux des données de l'activité, des sessions et de la performance d'un utilisateur
 *  à partir du format JSON
 * @param {PerformanceJSON | ActivityJSON | SessionJSON} json Des données dans des formats JSON différents
 * @param {string} typeToManufacture Le type à fabriquer `activity`,`performance`,`sessop,`
 * @returns {any} manufactured
 * @returns {number} manufactured.id L'identifiant de l'utilisateur
 * @returns {Performance[] | Activity[] | Session[] } manufactured.getData Un tableau des performances ou un tableau des sessions ou un tableau des activités
 */
function userDataFactory(json, typeToManufacture) {
  const { userId } = json;
  const typeData = typeToManufacture;

  switch (typeToManufacture) {
    case 'performance':
      const { kind, data } = json;
      getPerformances(kind, data);
      break;
    case 'activity':
      //
      break;
    case 'session':
      //
      break;
    default:
    //
  }
  /**
   * Fabriquer un utilisateur et fabriquer toutes ses données clefs
   * @returns {User}
   */
  function getData() {
    /** @type {User} L'utilisateur en fabrication */
    // let user = new User(
    //   id,
    //   userInfos.firstName,
    //   userInfos.lastName,
    //   userInfos.age,
    //   score
    // );
    // return user;
  }
  return { userId, getData };
}

/**
 *
 * @param {Object} kindJSON Tous les libellés des performances
 * @param {Object[]} dataJSON Tous les niveaux des performances
 * @returns {Array.<Performance>}
 */
function getPerformances(kindJSON, dataJSON) {
  const performances = JSON.parse(kindJSON);

  kindJSON.find((data) => data.kind === 1);

  performances.push(new Performance('', 1));

  return performances;
}

export default userDataFactory;
