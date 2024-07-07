import {searchPageNumberUpdated, searchPageUpdated, searchQueryUpdated} from "../../../features/searchPage";

export async function homeLoader() {
  const lastSearchQuery = sessionStorage.getItem('search');
  const lastSearchPage = sessionStorage.getItem('page');
  if (lastSearchQuery) {
    searchQueryUpdated(lastSearchQuery);
  }
  if (lastSearchPage) {
    searchPageNumberUpdated(parseInt(lastSearchPage));
  }
  if (!lastSearchPage && !lastSearchQuery) {
    searchPageUpdated();
  }
  return null;
}