import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared/styles/index.css";
import { App } from "./App.tsx";
import { SidebarModal } from "../shared/components/sidebar/modal/sidebar-modal.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
