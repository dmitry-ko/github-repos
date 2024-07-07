export type RepositoryListItemType = {
  nameWithOwner: string
  updatedAt: string
  url: string
  id: string
  stargazerCount: number
}

type PageInfoType ={
  endCursor: string
  hasNextPage: boolean
}

export type RepositorySearchPageType = {
  nodes: RepositoryListItemType[]
  repositoryCount: number
  pageInfo: PageInfoType
}

