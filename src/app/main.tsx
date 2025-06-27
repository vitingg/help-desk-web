import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared/styles/index.css";
import { App } from "./App.tsx";
import { Select  } from "../shared/components/select.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Select />
  </StrictMode>
);
