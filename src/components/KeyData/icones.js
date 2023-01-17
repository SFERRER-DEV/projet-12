import colors from '../../utils/style/colors';

import {
  faAppleWhole,
  faBurger,
  faDrumstickBite, // Free ! drum-stick, pro ?
  faFire,
} from '@fortawesome/free-solid-svg-icons';

/**
 * @typedef {Object} icon
 * @property {string} key Le nom de la donnée clef utilisateur comme appelée dans les données d'origines json
 * @property {string} icon L'icône fontAwesome elle même importée au format svg
 */
/** @type {icon[]} Les icônes des cartes */
const iconesList = [
  {
    key: 'calorieCount',
    icon: faFire,
    color: colors.faFire,
  },
  {
    key: `proteinCount`,
    icon: faDrumstickBite,
    color: colors.faDrumstickBite,
  },
  {
    key: `carbohydrateCount`,
    icon: faAppleWhole,
    color: colors.faAppleWhole,
  },
  {
    key: `lipidCount`,
    icon: faBurger,
    color: colors.faBurger,
  },
];

/**
 * @description Trouver l'icône FontAwesome à utiliser à partir de l'identifiant d'une donnée clef
 * @param {number} key L'identifiant d'origine d'une donnée clef
 * @returns {Objet} L'icône FontAwesome au format svg
 */
export const findIcon = (key) => {
  return iconesList
    .filter((obj) => {
      return obj.key === key;
    })
    .map((item) => item)
    .shift();
};
