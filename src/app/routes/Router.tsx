import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {Root} from "../../pages/root";
import {login} from "../../widgets/login";
import {Home, homeLoader} from "../../pages/home";
import "../../shared/ui/index.css";
import {Repo, repoLoader} from "../../pages/repo";
import {setCurrentRepositoryFx, SetRepositoryInterface} from "../../widgets/repository";

const router = createBrowserRouter([
  { path: "/",
    Component: Root,
    loader: login,
    children: [
      {
        index: true,
        Component: Home,
        loader: homeLoader,
      },
      {
        path: 'repo/:owner/:name',
        Component: Repo,
        loader: ({params}) => {
          setCurrentRepositoryFx(params as SetRepositoryInterface);
          return null;
        },
      }
    ]
  },
]);

export function Router() {
  return <RouterProvider router={router} />;
}