import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { createRouter } from './router'

const router = createRouter()

// Solo ejecutamos si existe 'document' (evita el error en el build)
if (typeof document !== 'undefined') {
  const rootElement = document.getElementById('root')
  if (rootElement) {
    const root = createRoot(rootElement)
    root.render(<RouterProvider router={router} />)
  }
}
