import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Card from "./Main/Card/index.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Card />
  </StrictMode>
);
