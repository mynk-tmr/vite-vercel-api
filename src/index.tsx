import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { App } from './App'
import { MainRouter } from './router'

const rootEl = document.getElementById('root')
if (rootEl) {
  const root = createRoot(rootEl)
  root.render(
    <StrictMode>
      <App>
        <MainRouter />
      </App>
    </StrictMode>,
  )
} else {
  alert('Root element not found')
}
