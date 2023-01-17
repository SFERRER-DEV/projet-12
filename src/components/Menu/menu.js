import training from '../../assets/training.svg';
import cycling from '../../assets/cycling.svg';
import swimming from '../../assets/swimming.svg';
import recovery from '../../assets/recovery.svg';

/**
 * @typedef {Object} IconesList
 * @property {string} uri Routing
 * @property {string} iconSvg Chemin statique vers le fichier svg dans /static/media/
 */
/** @type {IconesList} */
export const iconesList = [
  {
    uri: `recovery`,
    iconSvg: recovery,
  },
  {
    uri: `swimming`,
    iconSvg: swimming,
  },
  {
    uri: `cycling`,
    iconSvg: cycling,
  },
  {
    uri: `training`,
    iconSvg: training,
  },
  /** Ajouter un objet à ce tableau ajoutera un nouveau menu avec une icône par défaut
  /**
  {
    uri: `test`,
  },
 */
];
