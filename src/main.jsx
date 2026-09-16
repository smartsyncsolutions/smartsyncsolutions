import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactLenis } from "lenis/react";

import "./index.css";
import App from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ReactLenis
        root
        options={{
          duration: 1.3,
          smoothWheel: true,
          wheelMultiplier: 0.8,
          touchMultiplier: 1.2,
        }}
      >
        <App />
      </ReactLenis>
    </BrowserRouter>
  </StrictMode>,
);
