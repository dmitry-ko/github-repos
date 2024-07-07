import { createStore } from "effector";
import {RepositorySearchPageType} from "./types.ts";

export const $repositorySearchPage = createStore<RepositorySearchPageType>({
  nodes: [],
  pageInfo: {
    endCursor: '',
    hasNextPage: false
  },
  repositoryCount: 0
});
