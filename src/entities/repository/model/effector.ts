import { createStore } from "effector";
import { RepositoryType } from "./types.ts";


export const $repository = createStore<RepositoryType>({
  languages: [],
  owner: {
    login: '',
    url: '',
    avatarUrl: ''
  },
  url: '',
  nameWithOwner: '',
  stargazerCount: 0,
  updatedAt: '',
  description: ''
})



