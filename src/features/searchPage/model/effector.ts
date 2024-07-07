import {createEvent, createStore, sample} from "effector";
import { getSearchPageFx } from "../api/getSearchPage.ts";
import { $repositorySearchPage } from "../../../entities/repositoriesSearchPage";
import {createEffect} from "effector/compat";

export const $searchQuery = createStore('');
export const searchQueryUpdated = createEvent<string>();
$searchQuery
  .on(searchQueryUpdated, (_, payload) => payload);

export const $searchPageNumber = createStore(1);
export const searchPageNumberUpdated = createEvent<number>();
$searchPageNumber
  .on(searchPageNumberUpdated, (_, payload) => payload);

export const searchPageUpdated = createEvent();

sample({
  clock: [$searchQuery, $searchPageNumber, searchPageUpdated],
  source: {searchQuery: $searchQuery, searchPageNumber: $searchPageNumber, currentPage: $repositorySearchPage},
  target: getSearchPageFx,
});

$repositorySearchPage.on(getSearchPageFx.doneData, (_, payload) => payload);
$searchPageNumber
  .on($searchQuery.updates, () => 1);

const searchSavedFx = createEffect((data: string) => sessionStorage.setItem('search', data));
sample({
  source: searchQueryUpdated,
  target: searchSavedFx
})

const pageSavedFx = createEffect((data: number) => sessionStorage.setItem('page', data.toString()));
sample({
  source: searchPageNumberUpdated,
  target: pageSavedFx
})

