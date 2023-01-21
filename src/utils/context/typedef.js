/**
 * @typedef  UserInfosJSON Informations d'identités de l'utilisateur
 * @property {string} firstName Prénom utilisateur
 * @property {string} lastName Nom de famille utilisateur
 * @property {number} age Âge de l'utilisateur
 */
/**
 * @typedef  KeyDataJSON Les données clés de l'utilisateur
 * @property {number} calorieCount Les calories pour l'utilisateur
 * @property {number} proteinCount Les protéïnes pour l'utilisateur
 * @property {number} carbohydrateCount Les glucides pour l'utilisateur
 * @property {number} lipidCount Les lipides pour l'utilisateur
 */
/**
 * @typedef UserJSON L'utlisateur JSON avec ses objets JSON imbriqués
 * @property {number} id L'identifiant de l'utilisateur
 * @property {UserInfosJSON} userInfos Un objet JSON contenant les champs d'état civile de l'utilisateur
 * @property {number} todayScore Score du jour de l'utilisateur
 * @property {KeyDataJSON} keyData Un objet JSON contenant les données clefs de l'utilisateur
 */
/**
 * @typedef DataPerformanceJSON Un niveau de performance de l'utilisateur
 * @property {number} kind Un numéro identifiant un libellé de performance
 * @property {number} value Le niveau de performance
 */
/**
 * @typedef PerformanceJSON La performance utilisateur avec ses objets imbriqués
 * @property {number} userId L'identifiant de l'utilisateur
 * @property {Object} kind Un object json de tous les libellés des performances numérotés
 * @property {DataPerformanceJSON[]} data Un tableau d'objets json des niveaux des performances de l'utilisateur
 */
/**
 * @typedef {Object} UserContext
 * @property {number} id Un identifiant utilisateur demandé pour requêter les données
 * @property {string} codeStatus Code Axios d'après le code HTTP indiquant comment s'est passée la requête
 * @property {Function} setCodeStatus Fonction de mise à jour du State
 * @property {Object} data Les données utilisateur au format JSON
 * @property {Object} dataActivity Les données de l'activité quotidiene au format JSON
 * @property {Object} dataSessions Les données de la durée moyenne des des sessions au format JSON
 * @property {Object} dataPerformance Les données des niveaux des performances au format JSON
 * @property {boolean} isLoading Les données sont-elle entrain de se charger ?
 * @property {Function} setLoading Fonction de mise à jour du State
 * @property {boolean} error Est-ce qu'une erreur est survenue lors du chargement ?
 * @property {Function} setError Fonction de mise à jour du State
 * @property {string} errorMessage La raison de l'erreur
 * @property {Function} setErrorMessage Fonction de mise à jour du State
 */
// Devoir exporter un objet vide ici est ennuyeux, mais requis pour par vscode transmette les types ?
export {};
