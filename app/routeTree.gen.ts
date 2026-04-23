import { Route as rootRoute } from './routes/__root'
import { Route as indexRoute } from './routes/index'

const indexRouteWithParent = indexRoute.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

export const routeTree = rootRoute.addChildren([indexRouteWithParent])
