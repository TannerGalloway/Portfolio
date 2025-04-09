import { createRoot } from "react-dom/client";
import { FormspreeProvider } from "@formspree/react";
import "./index.css";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <FormspreeProvider project={import.meta.env.VITE_FORMSPREE_PROJECT_ID}>
    <App />
  </FormspreeProvider>
);
