import {githubGraphQLQuery} from "../../../shared/api/githubGraphQLQuery.ts";

export async function getRepository(owner: string, name: string) {
  return githubGraphQLQuery(`
    {
      repository(owner: "${owner}", name: "${name}") {
        nameWithOwner
        owner {
          login
          avatarUrl
          url
        }
        url
        id
        stargazerCount
        updatedAt
        languages(first: 10) {
          nodes {
            name
            color
          }
        }
        description
      }
    }
    `
  )
}