import {createEffect} from "effector";
import {RepositorySearchPageType} from "../../../entities/repositoriesSearchPage";
import {getRepositoriesSearchPage} from "./getRepositoriesSearchPage.ts";
import {REPOSITORIES_PER_PAGE} from "../config/constants.ts";
import {getViewersRepositoriesSearchPage} from "./getViewersRepositoriesSearchPage.ts";


function getCursorForPage(pageNumber: number, endCursor: string) {
  if (pageNumber === 1) {
    return null;
  }

  const cursorStr = endCursor ? atob(endCursor) : 'cursor:';
  return btoa(cursorStr.split(':')[0] + `:${REPOSITORIES_PER_PAGE * pageNumber}`);

}
interface GetSearchPage {
  searchQuery: string;
  searchPageNumber: number;
  currentPage: RepositorySearchPageType;
}
export const getSearchPageFx = createEffect(
  async ({searchPageNumber, searchQuery, currentPage}: GetSearchPage) =>
  {
    const cursor = getCursorForPage(searchPageNumber, currentPage.pageInfo.endCursor);
    if (searchQuery) {
      const result = await getRepositoriesSearchPage(searchQuery, REPOSITORIES_PER_PAGE, cursor);
      return result.data.search;
    }
    else {
      const result = await getViewersRepositoriesSearchPage(REPOSITORIES_PER_PAGE, cursor);
      return result.data.viewer.repositories;
    }
  }
)