import {RepositoryListItemType} from "../../../entities/repositoriesSearchPage";
import githubLogoImg from "../../../shared/images/GitHub_Logo.png";
import "./repositoryListItem.css";
import {Link} from "react-router-dom";

export function RepositoryListItem({repository}: { repository: RepositoryListItemType } ) {
  return (
    <div className="repository-list__item">
      <Link to={`/repo/${repository.nameWithOwner}`}
            className="repository-list__item-header interactive-element">
        {repository.nameWithOwner}
      </Link>
      <p>
        <span style={{color: "gold"}}>&#9733;</span> {repository.stargazerCount}
      </p>
      <p>Последнее изменение: {repository.updatedAt.split('T')[0]}</p>
      <a href={repository.url} className="interactive-element" target="_blank" rel="noopener noreferrer">
        <img src={githubLogoImg as string} width="100%" alt="Github logo"/>
      </a>
    </div>
  );
}