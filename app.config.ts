import { createApp } from 'vinxi'
import tsConfigPaths from 'vite-tsconfig-paths'

export default createApp({
  server: {
    preset: 'github-pages',
  },
  routers: [
    {
      name: 'client',
      type: 'spa', // Esto es clave para que funcione como una aplicación sencilla
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
