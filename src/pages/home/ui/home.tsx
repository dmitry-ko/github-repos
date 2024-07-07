import {RepositoryList} from "../../../widgets/repositoryList";
import {RepositorySearch} from "../../../widgets/repositorySearch";
import "./home.css";
import {Paginator} from "../../../widgets/paginator";

export function Home() {
  return (
    <section className="section home">
      <RepositorySearch/>
      <RepositoryList/>
      <Paginator/>
    </section>
  );
}