import { createApp } from 'vinxi'
import tsConfigPaths from 'vite-tsconfig-paths'

export default createApp({
  server: {
    preset: 'github-pages',
  },
  routers: [
    {
      name: 'public',
      type: 'static',
      dir: './public',
    },
    {
      name: 'client',
      type: 'spa',
      handler: './app/client.tsx',
      target: 'browser',
      plugins: () => [
        tsConfigPaths({
          projects: ['./tsconfig.json'],
        }),
      ],
    },
    {
      name: 'ssr',
      type: 'http',
      handler: './app/client.tsx', // Usamos el mismo para evitar el error de 'handler'
      target: 'server',
    },
  ],
})
