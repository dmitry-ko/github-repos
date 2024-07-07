import {githubGraphQLQuery} from "../../../shared/api/githubGraphQLQuery.ts";

export async function getViewersRepositoriesSearchPage(first: number, after: string | null) {
  return githubGraphQLQuery(`
    {
      viewer {
        repositories(first:${first}${after ? `,after:"${after}"` : ''}) {
          nodes {
            ... on Repository {
              nameWithOwner
              updatedAt
              url
              id
              stargazerCount
            }
          }
          repositoryCount: totalCount
          pageInfo {
            endCursor
            hasNextPage
          }
        }
      }
    }
    `
  )
}