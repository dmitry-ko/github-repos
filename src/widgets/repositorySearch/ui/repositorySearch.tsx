import {useUnit} from "effector-react";
import {$searchQuery, searchQueryUpdated} from "../../../features/searchPage";
import "./repositorySearch.css";

export function RepositorySearch() {
  const searchQuery = useUnit($searchQuery);
  const setSearchQuery = useUnit(searchQueryUpdated);
  return (
    <input type="text"
           className="repository-search"
           placeholder='Поиск по названию репозитория'
           value={searchQuery}
           onChange={(event) => setSearchQuery(event.target.value)}
    />
  )
}