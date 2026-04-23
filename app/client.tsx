import { hydrateRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import { createRouter } from './router'

const router = createRouter()

// Usamos RouterProvider en lugar de StartClient
hydrateRoot(document, <RouterProvider router={router} />)
