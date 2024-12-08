import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "../shared/interfaces/index.css";
import BaseLayout from "./layouts/BaseLayout.tsx";
import { Provider } from "react-redux";
import { store } from "./appStore.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Provider store={store}>
      <BaseLayout />
    </Provider>
  </StrictMode>
);
