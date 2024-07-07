import {githubGraphQLQuery} from "../../../shared/api/githubGraphQLQuery.ts";

export async function getRepositoriesSearchPage(search: string, first: number, after: string | null) {
  return githubGraphQLQuery(`
    {
      search(query:"${search}",type:REPOSITORY,first:${first}${after ? `,after:"${after}"` : ''}) {
        nodes {
          ... on Repository {
            nameWithOwner
            updatedAt
            url
            id
            stargazerCount
          }
        }
        repositoryCount
        pageInfo {
          endCursor
          hasNextPage
        }
      }
    }
    `
  )
}