import {createEffect} from "effector";
import {getRepository} from "../api/getRepository.ts";
import {$repository} from "../../../entities/repository";


export interface SetRepositoryInterface {
  owner: string,
  name: string,
}

export const setCurrentRepositoryFx = createEffect(async ({owner, name}: SetRepositoryInterface) => {
  const result = await getRepository(owner, name);
  result.data.repository.languages = result.data.repository.languages.nodes;
  return result.data.repository;
});

$repository
  .on(setCurrentRepositoryFx.doneData, (_, payload) => payload);