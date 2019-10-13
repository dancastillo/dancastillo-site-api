/**
 * @type {{Authorization: string, "Content-Type": string}}
 */
export const headers = {
  'Authorization': `Bearer ${process.env.GITHUB_AUTH}`,
  'Content-Type': 'application/json'
};

/**
 * @type {string}
 */
export const projectsQuery = `query {
  viewer {
    name
     repositories (last: 100) {
         nodes { 
            name
            url
         }
     }
   }
}`;
