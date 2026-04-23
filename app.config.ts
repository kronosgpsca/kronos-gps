import { createApp } from 'vinxi'
import tsConfigPaths from 'vite-tsconfig-paths'

export default createApp({
  server: {
    preset: 'github-pages',
  },
  routers: [
    {
      name: 'client',
      type: 'spa',
      handler: './index.html', // Punto de entrada
      target: 'browser',
      base: '/', // Esto es vital para el dominio .com
      plugins: () => [
        tsConfigPaths({
          projects: ['./tsconfig.json'],
        }),
      ],
    }
  ],
})
