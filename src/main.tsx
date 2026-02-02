import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './styles/default.css'
import './styles/globals.css'
import './styles/layout.css'
import './styles/media-queries.css'

const GA_ID = import.meta.env.VITE_GA_ID

// Initialize Google Analytics
if (GA_ID) {
  const script = document.createElement('script')
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
  script.async = true
  document.head.appendChild(script)

  script.onload = () => {
    window.dataLayer = window.dataLayer || []
    function gtag(...args: unknown[]) {
      window.dataLayer.push(args)
    }
    gtag('js', new Date())
    gtag('config', GA_ID, { page_path: window.location.pathname })
  }
}

declare global {
  interface Window {
    dataLayer: unknown[]
  }
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
