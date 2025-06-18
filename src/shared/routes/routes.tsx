import { Routes, BrowserRouter } from "react-router-dom";
import { RedirectRoutes } from "./redirect-routes";
import { AuthRoutes } from "./auth-routes";
import { AdminRoutes } from "./admin-routes";
import { TechRoutes } from "./tech-routes";

export function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        {RedirectRoutes()}
        {AuthRoutes()}
        {AdminRoutes()}
        {TechRoutes()}
      </Routes>
    </BrowserRouter>
  );
}
