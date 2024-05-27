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

/**
 * Get the most recent days from the given data.
 *
 * @param {Record<string, number>} data - The data to filter.
 * @param {number} days - The number of days to get.
 * @returns {Record<string, number>} The most recent days.
 */
export const getMostRecentDays = (
  data: Record<string, number>,
  days: number
) => {
  const dates = Object.keys(data).sort(
    (a, b) => new Date(a).getTime() - new Date(b).getTime()
  );
  const mostRecentDays = dates.slice(-days);
  return mostRecentDays.reduce((acc, date) => {
    acc[date] = data[date];
    return acc;
  }, {} as Record<string, number>);
};

/**
 * Parse the given data into the format required by the LineChart component.
 *
 * @param {Record<string, number>} data - The data to parse.
 * @returns {Record<string, number>[]} The parsed data.
 */
export const parseLineChartData = (data: Record<string, number>) => {
  return Object.entries(data).map(([x, y]) => ({ x, y }));
};

/**
 * Format a date for the LineChart component.
 * The expected input is like 2024-05-20
 * The expected return format is like 5/20
 *
 * @param {string} date - The date to format.
 * @returns {string} The formatted date.
 */
export const formatLineChartDate = (date: string) => {
  const [_, month, day] = date.split("-");
  return `${Number(month)}/${Number(day)}`;
};

/**
 * Format the keys of the given data to be used in the LineChart component.
 *
 * @param {Record<string, number>} data - The data to format.
 * @returns {Record<string, number>} The formatted data.
 */
export const formatKeysToLineChartDates = (data: Record<string, number>) => {
  return Object.keys(data).reduce((acc, key) => {
    acc[formatLineChartDate(key)] = data[key];
    return acc;
  }, {} as Record<string, number>);
};
