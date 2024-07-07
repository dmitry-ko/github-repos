import { $repositorySearchPage } from "../../../entities/repositoriesSearchPage";

export const $repositoryList = $repositorySearchPage.map(state => state?.nodes);