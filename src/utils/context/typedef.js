/**
 * @typedef {Object} UserInfos Informations d'identités de l'utilisateur
 * @property {string} firstName Prénom utilisateur
 * @property {string} lastName Nom de famille utilisateur
 * @property {number} age Age de l'utilisateur
 */
/**
 * @typedef {Object} KeyData Les données clés de l'utilisateur
 * @property {number} calorieCount Les calories pour l'utilisateur
 * @property {number} proteinCount Les protéïnes pour l'utilisateur
 * @property {number} carbohydrateCount Les glucides pour l'utilisateur
 * @property {number} lipidCount Les lipides pour l'utilisateur
 */
/**
 * @typedef UserJSON L'utlisateur JSON avec ses objets JSON imbriqués
 * @property {number} id L'identifiant de l'utilisateur
 * @property {UserInfos}
 * @property {number} todayScore Score du jour de l'utilisateur
 * @property {KeyData}
 */
// Devoir exporter un objet vide ici est ennuyeux, mais requis pour par vscode transmette les types ?
export {};
