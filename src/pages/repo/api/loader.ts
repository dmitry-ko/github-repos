import {setCurrentRepositoryFx, SetRepositoryInterface} from "../../../widgets/repository";
export async function repoLoader({params}) {
  await setCurrentRepositoryFx(params as SetRepositoryInterface);
  return null;
}