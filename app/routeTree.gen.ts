import { Route as rootRoute } from './routes/__root'
import { Route as indexRoute } from './routes/index'

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      parentRoute: typeof rootRoute
    }
  }
}

export const routeTree = rootRoute.addChildren([indexRoute])
