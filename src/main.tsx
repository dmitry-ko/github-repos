import React from "react";
import {createRoot} from 'react-dom/client';
import {Router} from "./app/routes";

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
)
