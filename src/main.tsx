import "./styles/index.css";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const GA_ID = import.meta.env.VITE_GA_ID;

if (GA_ID) {
  const script = document.createElement("script");
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`;
  script.async = true;
  document.head.appendChild(script);

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer?.push(args);
  }
  window.gtag = gtag;
  gtag("js", new Date());
  gtag("config", GA_ID, { page_path: window.location.pathname });
}

// biome-ignore lint/style/noNonNullAssertion: root element is guaranteed to exist in index.html
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
