import "./root.css";
import {Outlet} from "react-router-dom";

export function Root() {
  return (
    <div className="main">
      <h1>Репозитории GitHub</h1>
      <Outlet/>
    </div>
  );
}

