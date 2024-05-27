/**
 * Truncate a given id to the first 6 and last 6 characters, with an ellipsis in the middle.
 * The ids are expected to be in the format like 018c965a-c4c0-fe97-f8e0-b04e99b9b89a.
 *
 * @param {string} id - The id to be truncated.
 * @returns {string} The truncated id.
 */
export const truncateId = (id: string) => {
  return `${id.slice(0, 6)}...${id.slice(-6)}`;
};
