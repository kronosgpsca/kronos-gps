import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { createRouter } from './router'

const router = createRouter()

// Forzamos el renderizado inmediato
const rootElement = document.getElementById('root')

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
} else {
  console.error("No se encontró el elemento #root")
}

export default {}
