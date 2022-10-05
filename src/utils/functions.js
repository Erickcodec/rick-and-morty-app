/**
 * Get a random number between one and the provided number.
 * @param  {String} limit Maximum number that it's received.
 * @return {String}      Random value retrieved.
 */
export const getRandomNumber = (limit) => {
  return Math.ceil(Math.random() * (limit - 1) + 1);
};
