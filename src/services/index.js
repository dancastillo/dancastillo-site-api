import axios from 'axios';

import { getProjectResponseData } from "../core/helpers/data";
import { projectsQuery, headers } from "../core/constants";

/**
 * @returns {Promise<Array>}
 */
export const getProjects = async () => {
  try {
    const response = await axios.post(process.env.GITHUB_API, { query: projectsQuery }, { headers });

    // Get projects array
    return getProjectResponseData(response);
  } catch (err) {
    throw err;
  }
};
