import {
  faAppleWhole,
  faBurger,
  faDrumstickBite, // Free ! drum-stick, pro ?
  faFire,
} from '@fortawesome/free-solid-svg-icons';

const iconesList = [
  {
    key: 'calorieCount',
    icon: faFire,
  },
  {
    key: `proteinCount`,
    icon: faDrumstickBite,
  },
  {
    key: `carbohydrateCount`,
    icon: faAppleWhole,
  },
  {
    key: `lipidCount`,
    icon: faBurger,
  },
];

/**
 * @description Trouver l'icône FontAwesome à utiliser à partir de l'identifiant d'une donnée clef
 * @param {number} id L'identifiant d'une donnée clef utilisateur
 * @returns {Objet} L'icône FontAwesome au format svg
 */
export const findIcon = (id) => {
  return iconesList
    .filter((obj) => {
      return obj.key === id;
    })
    .map((item) => item.icon)
    .shift();
};
