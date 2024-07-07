import {useUnit} from "effector-react";
import {$repository} from "../../../entities/repository";
import "./repository.css";

export function Repository() {
  const repository = useUnit($repository);
  return (
    <section className="repository">
      <div className="repository-container">
        <h2 className="repository-container__element">
          {repository.nameWithOwner}
        </h2>
        <p className="repository-container__element">
          <span style={{color: "gold"}}>&#9733;</span> {repository.stargazerCount}
        </p>
        <p className="repository-container__element">
          Последнее изменение: {repository.updatedAt.split('T')[0]}
        </p>
      </div>
      <div className="repository-container">
        <h3 className="repository-container__element">Владелец репозитория:</h3>
        {repository.owner.avatarUrl &&
          <img className="repository-container__element" src={repository.owner.avatarUrl} alt="Owner avatar"/>
        }
        <a href={repository.owner.url}
           className="repository-container__element repository-owner interactive-element"
           target="_blank" rel="noopener noreferrer">
          {repository.owner.login}
        </a>
      </div>
      <div className="repository-container">
        <h3 className="repository-container__element">Языки: </h3>
        {repository.languages.map(({name, color}) =>
          <span className='repository-lang' style={{color}}>{name} </span>)
        }
      </div>
      <div className="repository-container">
        <h3 className="repository-container__element">Описание: </h3>
        <p className="repository-container__element"> {repository.description}</p>
      </div>


    </section>
  );
}