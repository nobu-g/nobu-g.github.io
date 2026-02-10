/// <reference types="vite/client" />

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export default classes;
}

export {};
