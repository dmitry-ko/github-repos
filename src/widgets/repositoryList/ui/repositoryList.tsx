import {useList} from "effector-react";
import {$repositoryList} from "../model/effector.ts";
import {RepositoryListItem} from "./repositoryListItem.tsx";
import {RepositoryListItemType} from "../../../entities/repositoriesSearchPage";
import {Store} from "effector";
import "./repsitory-list.css";

export function RepositoryList() {
  const repositoryList = useList($repositoryList as Store<RepositoryListItemType[]>,repo => (
    <li>
      <RepositoryListItem repository={repo}/>
    </li>
  ))
  return (
    <ul className="repository-list">
      {repositoryList}
    </ul>
  );
}