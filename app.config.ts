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
      base: '/',
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
  ],
})
