import { useState, useEffect } from 'react';

/**
 * @description Temporiser pour afficher le sablier
 * @param {number} timer Un nombre de secondes à attendre
 * @returns {number} Le nombre de secondes restantes
 */
export function useTimer(timer) {
  /**
   * @typedef {number} seconds Nombre de seconde(s) à attendre
   */
  const [
    /** @type {seconds} */
    seconds,
    setSeconds,
  ] = useState(timer); // 1s

  useEffect(() => {
    /**
     * Attendre quelques secondes
     * @param {number} seconds Nombre de seconde(s) à attendre
     */
    async function waitSeconds(seconds) {
      const interval = setInterval(() => {
        if (seconds > 0) setSeconds((seconds) => seconds - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
    waitSeconds(seconds);
  }, [seconds]);
  return { seconds };
}
