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
 * @typedef {Object} UserContext Le contexte des données cherchées sur le backend
 * @property {string} codeStatus Code Axios d'après le code HTTP indiquant comment s'est passée la requête
 * @property {UserJSON} data Les données utilisateur au format JSON
 * @property {boolean} isLoading Les données sont-elle entrain de se charger ?
 * @property {boolean} error Est-ce qu'une erreur est survenue lors du chargement ?
 * @property {string} errorMessage La raison de l'erreur
 */
/**
 * @typedef {Object} UserContextMock Le contexte des données obtenues localement dans le fichier JSON
 * @property {string} codeStatus Code Axios d'après le code HTTP indiquant comment s'est passée la requête
 * @property {UserJSON} data Les données utilisateur au format JSON
 * @property {boolean} isLoading Les données sont-elle entrain de se charger ?
 * @property {boolean} error Est-ce qu'une erreur est survenue lors du chargement ?
 * @property {string} errorMessage La raison de l'erreur
 */

// Devoir exporter un objet vide ici est ennuyeux, mais requis pour par vscode transmette les types ?
export {};
