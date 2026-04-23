import './global.css' // <--- Esta línea conecta los estilos
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { createRouter } from './router'

const router = createRouter()

const rootElement = document.getElementById('root')

if (rootElement) {
  const root = createRoot(rootElement)
  root.render(<RouterProvider router={router} />)
}

export default {}
