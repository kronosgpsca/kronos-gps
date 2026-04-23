import { createRootRoute } from '@tanstack/react-router'
import { Outlet, Meta, Scripts } from '@tanstack/react-start'

export const Route = createRootRoute({
  component: () => (
    <html lang="es">
      <head>
        <Meta />
      </head>
      <body>
        <Outlet />
        <Scripts />
      </body>
    </html>
  ),
})
