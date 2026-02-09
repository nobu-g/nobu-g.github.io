declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  }
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export default classes;
}

export {};
