/**
 * @param response
 * @returns array
 */
export const getProjectResponseData = (response) => {
  const { nodes } = response.data.data['viewer']['repositories'];
  return nodes;
};
