import React from 'react'
import ReactDOM from 'react-dom/client'
import { CookieBanner } from './'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <div>
      <h2>Cookie banner dev</h2>
      <CookieBanner />
    </div>
  </React.StrictMode>,
)
