type RepositoryOwnerType = {
  login: string;
  avatarUrl: string
  url: string
}

type LanguageType = {
  name: string
  color: string
}

export type RepositoryType = {
  nameWithOwner: string
  owner: RepositoryOwnerType
  url: string
  stargazerCount: number
  updatedAt: string
  languages: LanguageType[]
  description: string
}
