import { useUnit } from "effector-react/compat";
import { $repositorySearchPage } from "../../../entities/repositoriesSearchPage";
import {
  $searchPageNumber,
  MAX_PAGES,
  REPOSITORIES_PER_PAGE,
  searchPageNumberUpdated
} from "../../../features/searchPage";
import { useMemo } from "react";
import "./paginator.css";

export function Paginator() {
  const [repositorySearchPage, searchPageNumber] =
    useUnit([$repositorySearchPage, $searchPageNumber]);
  const updateSearchPageNumber = useUnit(searchPageNumberUpdated);
  const pageNumbers = useMemo(() => {
      const pagesCount = Math.min(Math.ceil(repositorySearchPage.repositoryCount / REPOSITORIES_PER_PAGE), MAX_PAGES);
      return [...Array(pagesCount).keys()].map(i => i + 1);
    },
    [repositorySearchPage.repositoryCount]
  )

  return (
    <ol className="paginator">
      {pageNumbers.map(pageNumber => (
        <li key={pageNumber}
            className={`paginator__item interactive-element ${pageNumber === searchPageNumber ? 'paginator__item_selected' : ''}`}
            onClick={() => updateSearchPageNumber(pageNumber)}
        >
          {pageNumber}
        </li>
      ))}
    </ol>
  );
}