import { createRootRoute, Outlet, Meta, Scripts } from '@tanstack/react-router'

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
